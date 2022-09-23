# Alex's Installation and Environment Setup Guide

---

## Backend

### Install Anaconda

Follow [this guide](https://docs.anaconda.com/anaconda/install/)

### Setup the Virtual Environment with Conda

Run Alex's bash script (from the project root dir) that sets up the conda env and installs all the required dependancies

```bash
bash install_backend.sh
```

Now, check that the environment is activated properly and using the correct version of python (THIS STEP IS VERY IMPORTANT):

**Windows:**

```bash
where python
```

**macOS / Linux:**

```bash
which python
```

It should say that it is using the python version installed by the virtual environment (onigiri), which should have something like this:
/Users/alexnicholson/opt/miniforge3/envs/onigiri/bin/python3 (for mac)

If it shows your system version of python (which is /usr/bin/python on mac) then you need to do this (double deactivate conda then reactivate):

```bash
conda deactivate
conda deactivate
conda activate onigiri
```

### Start the django server

Run the following command from within the **mysite** directory

```bash
python manage.py runserver
```

As it says in the terminal output, view the server [on localhost port 8000 here](http://127.0.0.1:8000/) to check that its running.

---

## Frontend

### Install Node.js

Download from the [Node.js website](https://nodejs.org/en/download/) and install

### Setup npm environment for react frontend

Run Alex's frontend bash script in the ./mysite/frontend (make sure to run it from inside that dir)

```bash
bash install_frontend.sh
```

### Run the NPM React Server

From the ./mysite/billboard directory, run:

```bash
npm run-script dev
```
