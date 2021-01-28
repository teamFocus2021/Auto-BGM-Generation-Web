from gcloud import storage
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="./dbtest-301709-b8daa273ad42.json"

os.environ.setdefault("GCLOUD_PROJECT", "dbtest") # 프로젝트 id를 넣어줌

client = storage.Client()

bucket = client.get_bucket('store_video2') # 버켓 이름 넣어줌


blob = bucket.blob('upload/original_video/test.mp4') # 파일을 어떤 이름으롤 올릴건지

# filename = "%s/%s" % (folder, filename)
# blob = bucket.blob(filename)

# Uploading from local file without open()
blob.upload_from_filename('test.mp4') # 저장할 파일 이름 넣어줌


blob.make_public() # 공개 리소스로 지정
url = blob.public_url # 올라간 url

print(url)


# 해야할 것

# 구글 클라우드 프로젝트 생성
# 생성한 프로젝트의 버켓 생성 -> 세분화된 액세스 제어 선택
# 버켓의 사용자 계정 생성

# pip install gcloud
# pip install --upgrade google-cloud-storage


# export GOOGLE_APPLICATION_CREDENTIALS="C:\Users\CHOISAYWHY\jsons\dbtest-301709-b8daa273ad42.json" 
#                                             ㄴ자기가 json 파일 저장한 경로 쓰기 
# 이후 실행