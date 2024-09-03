# hello-typescript-jest

```text
npm install && \
  npx tsc && \
  npx jest --coverage && \
  sonar-scanner \
    -Dsonar.projectKey=$(basename `pwd`) \
    -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info \
    -Dsonar.sources=src \
    -Dsonar.exclusions="src/__tests__/*" \
    -Dsonar.tests=src/__tests__
```
