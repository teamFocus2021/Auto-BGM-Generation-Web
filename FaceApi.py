import os
import requests
import json
import time
import random
import re

client_id = "fo5vafekDd_Dr7fd_Lt7" # private info
client_secret = "7IDiLJY66W"  # private info
url = "https://openapi.naver.com/v1/vision/face"  # 얼굴 감지
headers = {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}

file_count = len(os.walk(os.getcwd()+'/upload/frames').__next__()[2])  # save_img directory 내의 파일 개수


path_dir = './upload/frames/'
file_list = os.listdir(path_dir)
file_list.sort()
last_file = ''
end = "{0:04d}".format(file_count) # 마지막 프레임 : 마지막 감정이 3초 이상 유지되었는 지 확인용
p = re.compile("[^0-9]")
origin_emotion = ''

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
        id = random.randint(1,10)
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
                # print(file_name, prev_emotion, emotion)
                if prev_emotion == emotion:
                    break # for face in faces 반복문을 나가기
                if i > 0:  # prev_file 이 존재할 때부터 처리
                    time = int(file_name) - int(prev_file)
                    if time < 3: # 1초 간격. 3초이상 표정이 지속되지 않은 경우 저장x
                        emotions.pop(prev_file, 404)
                        emotions[file_name] = emotion+str(id)
                        # 순간 감정이 나왔어 그동안의 감정이 지속된 시간을 계산해. 순간 감정이 얼마나 지속되는지 알려면 prev=curr 필요.
                        prev_file = file_name
                        prev_emotion = emotion
                        break
                    else:
                        if origin_emotion == prev_emotion:
                            emotions.pop(prev_file, 404)
                        origin_emotion = prev_emotion
                prev_file = file_name
                prev_emotion = emotion                
                emotions[file_name] = emotion+str(id)
                
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


pathDir = './upload'
if not os.path.isdir(pathDir):
    os.mkdir(pathDir)

pathDir = './upload/emotion'
if not os.path.isdir(pathDir):
    os.mkdir(pathDir)

pathDir = './upload/frames'
if not os.path.isdir(pathDir):
    os.mkdir(pathDir)

pathDir = './upload/new_video'
if not os.path.isdir(pathDir):
    os.mkdir(pathDir)

pathDir = './upload/original_video'
if not os.path.isdir(pathDir):
    os.mkdir(pathDir)
    
# json 파일로 저장
with open('./upload/emotion/emotions.json', 'w', encoding='utf-8') as make_file:
    json.dump(news, make_file, indent="\t")

# # 저장한 파일 출력하기
# with open('./emotions.json', 'r') as f:
#     json_data = json.load(f)
#
# print()
# print("************emotions.json************")
# print(json.dumps(json_data, indent="\t"))

