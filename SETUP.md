# Installation and Environment Setup Guide

## Install Anaconda

Follow [this guide](https://docs.anaconda.com/anaconda/install/)

## Setup the Virtual Environment with Conda

Run Alex's bash script (from the project root dir) that sets up the conda env and installs all the required dependancies

```bash
bash install.sh
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

## Start the django server

```bash
python ./mysite/manage.py runserver
```

As it says in the terminal output, view the server [on localhost port 8000 here](http://127.0.0.1:8000/) to check that its running.
