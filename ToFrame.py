import datetime
import os
import time
import cv2

video_capture = cv2.VideoCapture('./upload/test.mp4')
if not video_capture.isOpened():
    print("can't find video")
    exit(1)

fps = 20
count = 0
total = 0.0
delay = 0.0
success = True

path = "./save_img"
if not os.path.isdir(path):
    os.mkdir(path)

success, image = video_capture.read()
cv2.imwrite(f"./save_img/0000.jpg", image)

default = time.time()
prev_time = time.time()
# time.sleep(0.1)

# 0.5초마다 찍기
while success:
    current_time = time.time() - prev_time
    ts = time.time() - default + 3600 * 15
    name = datetime.datetime.fromtimestamp(ts).strftime("%M%S")
    cv2.imwrite("./save_img/{0:04d}.jpg".format(count), image)
    count += 1
    for i in range(16):
        success, image = video_capture.read()

    prev_time = time.time()

file_count = len(os.walk(os.getcwd() + '/save_img').__next__()[2])  # save_img directory 내의 파일 개수
print("file_count :", file_count)