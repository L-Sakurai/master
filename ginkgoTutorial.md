## *ginkgo Tutorial*

- [ ] ***set up ginkgo***

  ```bash
  $ go get github.com/onsi/ginkgo/ginkgo
  $ go get github.com/onsi/gomega
  ```

- [ ] ***To make testting package under your $GOPATH/src***

  ```bash
  $Home/gocode/src/<new your directory> && cd <new your directory>
  ```

- [ ] ***To make suit_test with bootstrap***

  ```bash
  $ ginkgo bootstrap
  ```

- [ ] ***To make Test Template***

  ```bash
  $ ginkgo generate
  ```

- [ ] ***also impl package***

  ```
  $ mkdir impl &&  cd impl
  $ touch impl.go
  ```

- [ ] ***check under your entry package***

  ```bash
  $ tree
  .
  ├── impl
  │   └── impl.go
  ├── tutorial_suite_test.go
  └── tutorial_test.go
  
  
  1 directory, 3 files
  ```

- [ ] ***how to import your impl***

  *tutorisl_test.go*

  ```go
  import(
    . "github.com/onsi/ginkgo"
  	. "github.com/onsi/gomega"
  	. "testRootPackage/impl"
  )
  ```

- [ ] ***exec test***

  ```bash
  hacknatural  HacknoMacBook-Pro  ~  gocode  src  tutorial  $  ginkgo -r
  Running Suite: Tutorial Suite
  =============================
  Random Seed: 1564888163
  Will run 2 of 2 specs
  
  ••
  Ran 2 of 2 Specs in 0.000 seconds
  SUCCESS! -- 2 Passed | 0 Failed | 0 Pending | 0 Skipped
  PASS
  
  Ginkgo ran 1 suite in 812.865009ms
  Test Suite Passed
  ```

  

