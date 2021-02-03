from gcloud import storage
import os
import json

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="./dbtest-301709-b8daa273ad42.json"

os.environ.setdefault("GCLOUD_PROJECT", "dbtest") # 프로젝트 id를 넣어줌

client = storage.Client()

bucket = client.get_bucket('store_video2') # 버켓 이름 넣어줌

# 동영상 파일 올리기

pre_video = bucket.blob('test.mp4') # 파일을 어떤 이름으롤 올릴건지

print(pre_video)

try:
    pre_video.delete()

except Exception:
    print("no such file")


video = bucket.blob('test.mp4') # 파일을 어떤 이름으롤 올릴건지

# Uploading from local file without open()
video.upload_from_filename('upload/original_video/test.mp4') # 저장할 파일 이름 넣어줌


video.make_public() # 공개 리소스로 지정
url = video.public_url # 올라간 url

print("동영상 URL : " + url)


# 프레임 파일 올리기

with open('upload/emotion/emotions.json') as json_file:
    json_data = json.load(json_file)

for key in json_data.keys():
    if( key == 'total' or key == 'time'):
        continue 
    print(key)
    frame_path = "upload/frames/"+ key +".jpg"
    frame = bucket.blob(key+".jpg") # 파일을 어떤 이름으롤 올릴건지
    try:
        frame.delete()
    except Exception:
        print("no such file")

    frame.upload_from_filename(frame_path)
    frame.make_public()
    frame_url = frame.public_url
    print("frame URL : " + frame_url)


# 해야할 것

# 구글 클라우드 프로젝트 생성
# 생성한 프로젝트의 버켓 생성 -> 세분화된 액세스 제어 선택
# 버켓의 사용자 계정 생성

# pip install gcloud
# pip install --upgrade google-cloud-storage


# export GOOGLE_APPLICATION_CREDENTIALS="C:\Users\CHOISAYWHY\jsons\dbtest-301709-b8daa273ad42.json" 
#                                             ㄴ자기가 json 파일 저장한 경로 쓰기 
# 이후 실행
# pip install -U httplib2==0.15.0

# https://github.com/googleapis/google-api-python-client/issues/803
