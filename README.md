# Auto BGM Generation WEB

## 1. Settings

- pip install

    ```
    $ pip install ffmpeg requests gcloud --upgrade google-cloud-storage httplib2==0.15.0
    ```

- npm install
    ```
    $ npm install
    ```

- Download

    ```
    $ sudo apt install ffmpeg
    > set up PATH
    ```

- Add Google Cloud user account json key

- If you had an error, try this!

    ```
    npm install react-dropzone-uploader shelljs ffmpeg bootstrap
    ```

---

## 2. Run in developer mode

- Watch mode

    ```
    $ npm run dev
    ```

---

## 3. Dockerize

- docker build

    ```
    $ sudo docker build -t bgm-gen-web .
    ```

- docker run

    ```
    $ sudo docker run -it -d -p 3000:3000 --name app bgm-gen-web
    ```