from gcloud import storage
import os
import json

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="./dbtest-301709-b8daa273ad42.json"

os.environ.setdefault("GCLOUD_PROJECT", "dbtest") # 프로젝트 id를 넣어줌

client = storage.Client()

bucket = client.get_bucket('store_video2') # 버켓 이름 넣어줌


# 프레임 파일 / 초기 파일 지우기

with open('upload/emotion/emotions.json') as json_file:
    json_data = json.load(json_file)

for key in json_data.keys():
    if( key == 'total' or key == 'time'):
        continue 
    print(key)
    frame = bucket.blob(key+".jpg") # 어떤 파일을 지울건지
    try:
        frame.delete()
    except Exception:
        print("can not detect such file")

# 동영상 초기 파일 지우기
pre_video = bucket.blob('test.mp4') # 어떤 파일을 지울건지
try:
    pre_video.delete()
except Exception:
    print("no such file")

pre_result_video = bucket.blob('result.mp4') # 어떤 파일을 지울건지
try:
    pre_result_video.delete()
except Exception:
    print("no such file")




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
