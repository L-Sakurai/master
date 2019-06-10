# To Do List

 - [ ] ***install Home brew***

  *install x-code(apple`s Development Tool)*

  ```
  $ xcode-select  --install
  ```

  *getting homebrew software from Home brew HP*
   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
  *Checking Home brew Condition*
  ```
  $ brew doctor
  ```
  *if brew doctor command Response was ** system is ready to brew.** that you are Collect*

  ```
  $ brew doctor
  Your system is ready to brew.
  ```
 - [ ] ***install iterm2 form HP***

      [*Go To Iterm2.com*](https://www.iterm2.com/)

 - [ ] ***add bash_profile***

 *create `.bash_profile` with vim Command or touch Command*
   ```
   $ vim .bash_profile
   ```
 *Reading `.bashrc` when you have under Home Directory*

  ```
  # to read .bashrc
  if [ -f ~/.bashrc ] ; then
  . ~/.bashrc
  fi
  ```
  *update .bash_profile*

  ```
  $ source ~/.bash_profile
  ```

 - [ ] ***add .bashrc***

 create .bashrc with vim Command or touch Command

 ```
 $ vim .bashrc
 ```
 *set ll Alias*

 ```
 # set Alias
 alias ll='ls -la'
 ```

 *exit your iterm2 Because of that .bash_profile exec only login to OS*

 ```
 $ exit
 ```

 *test in `ll` command*

 ```
 $ ll ~/
 ```

 - [ ] ***install go***

 *install go from brew*

 ```
 $ brew install go
 ```

 why go is available when brew install ...

 Because ...

 ```
 $ which go
 /usr/local/bin/go
 ```

 *resist GOPATH in `.bash_profile`*

 ```
 #Export
 export GOPATH=~/gocode
 export PATH=$GOPATH/bin:$PATH
 ```



 - [ ] ***install ginkgo***

 - [ ] ***install GitHub***

  ```
  $ brew install git
  ```
  *set global Configuration*
  ```
  git config --global user.name "Your Name"
  ```

  ```
  git config --global user.email "Youraddress@gmail.com"
  ```

  [*To make your git account*](https://github.com/)

  *add your remote Repository*
  ```
  git remote add origin https://yourremoteRepositoriesURL
  ```
