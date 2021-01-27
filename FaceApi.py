import os
import requests
import json
import time

client_id = "JfMpmv64nah1_Xi6b1CE" # private info
client_secret = "lDeEYya5VI"  # private info
url = "https://openapi.naver.com/v1/vision/face"  # 얼굴 감지
headers = {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}

file_count = len(os.walk(os.getcwd()+'/save_img').__next__()[2])  # save_img directory 내의 파일 개수


path_dir = './save_img/'
file_list = os.listdir(path_dir)
file_list.sort()
last_file = ''
end = "{0:04d}".format(file_count) # 마지막 프레임 : 마지막 감정이 3초 이상 유지되었는 지 확인용

# emotions.json
emotions = dict()

count = [0, 0, 0, 0, 0]  # smile, neutral, sad, fear, surprise 빈도 체크
prev_file = '' # 이전 감정이 시작된 시간
prev_emotion = '' # 영상이 가지고 있던 감정
for i, file_name in enumerate(file_list):
    f = open(path_dir+file_name, 'rb')
    files = {'image': f}
    file_name = file_name[:-4]  # .jpg 제거 ex)file_name : "0000"
    response = requests.post(url, files=files, headers=headers)
    res_code = response.status_code
    if res_code == 200:
        faces = response.json()['faces']
        # faces 의 value 가 있는 경우(얼굴 감지한 경우)
        if response.json()['faces']:
            for face in faces:
                emotion = face['emotion']['value']
                # 5가지 감정으로 통일
                if emotion == 'laugh' or emotion == 'smile':
                    emotion = 'smile'
                    count[0] += 1
                elif emotion == 'talking' or emotion == 'neutral':
                    emotion = 'neutral'
                    count[1] += 1
                elif emotion == 'sad':
                    count[2] += 1
                elif emotion == 'angry' or emotion == 'fear':
                    emotion = 'fear'
                    count[3] += 1
                elif emotion == 'disgust' or emotion == 'surprise':
                    emotion = 'surprise'
                    count[4] += 1
                # print(file_name, emotion)
                if prev_emotion == emotion:
                    break # for face in faces 반복문을 나가기
                if i > 0:  # prev_file 이 존재할 때부터 처리
                    time = int(file_name) - int(prev_file)
                    # if time < 3: # 0.5초 간격이므로 3초이상 표정이 지속되지 않은 경우 저장x
                    if time < 3: # 1초 간격  
                        emotions.pop(prev_file, 404)
                        if not prev_emotion == emotion:
                            emotions[file_name] = emotion
                        prev_file = file_name
                        prev_emotion = emotion
                        break
                emotions[file_name] = emotion
                prev_file = file_name
                prev_emotion = face['emotion']['value']
                
        else:
            # 감지한 얼굴이 없는 경우 -> "faces":[] -> 삭제
            f.close()
            os.remove(path_dir+file_name+".jpg")
            # print(f"{file_name} no face -> removed !")

    else:
        print("Error Code:" + str(res_code))
        exit(1)

# 마지막 감정에 대한 처리
last_file = prev_file
# if int(end) - int(last_file) < 6:
if int(end) - int(last_file) < 3:
    print("last file delete !")
    emotions.pop(last_file, 404)

# 중복된 감정 제거
keys = list(emotions.keys())
news = {}
prev_key = keys[0]
prev_value = emotions[keys[0]]
news[prev_key] = prev_value
for key, value in emotions.items():
    if not prev_key == key:
        if not prev_value == value:
            prev_key = key
            prev_value = value
            news[prev_key] = prev_value
            continue

# 오디오 추출을 위해 영상 끝나는 시간 추가 'time': '0180'
news['time'] = end

# 전체적인 분위기를 감정이 추출된 횟수로 파악
total = count.index(max(count))
if total == 0:
    news['total'] = 'smile'
if total == 1:
    news['total'] = 'neutral'
if total == 2:
    news['total'] = 'sad'
if total == 3:
    news['total'] = 'fear'
if total == 4:
    news['total'] = 'surprise'

# json 파일로 저장
with open('./emotions.json', 'w', encoding='utf-8') as make_file:
    json.dump(news, make_file, indent="\t")

# # 저장한 파일 출력하기
# with open('./emotions.json', 'r') as f:
#     json_data = json.load(f)
#
# print()
# print("************emotions.json************")
# print(json.dumps(json_data, indent="\t"))


# 얼굴이 없는 경우 : {"info":{"size":{"width":404,"height":720},"faceCount":0},"faces":[]}
# 얼굴이 있는 경우 : {"info":{"size":{"width":354,"height":472},"faceCount":1},
# "faces":[{"roi":{"x":110,"y":124,"width":149,"height":149},"landmark":{"leftEye":{"x":145,"y":167},
# "rightEye":{"x":216,"y":165},"nose":{"x":178,"y":199},"leftMouth":{"x":153,"y":231},"rightMouth":{"x":210,"y":232}},
# "gender":{"value":"male","confidence":1.0},"age":{"value":"19~23","confidence":0.494793},"emotion":{"value":"neutral",
# "confidence":1.0},"pose":{"value":"frontal_face","confidence":0.999343}}]}
