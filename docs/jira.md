# JIRA

JIRA 是一个缺陷跟踪管理系统，为针对缺陷管理、任务追踪和项目管理的商业性应用软件，开发者是澳大利亚的Atlassian。

JIRA这个名字并不是一个缩写，而是截取自“Gojira”，日文的哥斯拉发音。

## 特性

### Scrum板

敏捷团队可以通过可定制的Scrum板尽可能快地专注于提供迭代和增量价值。

### 看板

灵活的看板可以让您的团队全面了解下一步，从而在最短的周期内不断提供最大的输出。

### 敏捷报告

团队可以访问十几个开箱即用的报告，通过实时，可操作的见解了解他们的团队如何通过sprint进行冲刺。

### 路线图，内置于Jira Software

概述全局，与利益相关者沟通计划，并确保您的路线图连接到您团队的工作 - 只需点击几下。

## 不单单是 bug 跟踪工具

- 定制过滤器
  - 使用Jira查询语言（JQL）创建客户过滤器
- 开发人员工具集成
  - 与开发人员工具集成，实现端到端的可追溯性
- 3,000多个应用程序
  - 使用应用程序扩展Jira Software的强大功能
- 可定制的工作流程
  - 创建可映射到任何工作方式的可自定义工作流程。学到更多
- 移动应用
  - 使用Jira Mobile从任何地方向前移动工作
- 丰富的API
  - 使用Jira强大的API集自动化流程
- 拓展学习
  - 二次开发 jira

使用 jira 开发文档资料等。

## docker

```bash
docker run -d \
  --name=mysql-db \
  --hostname=mysql-db \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=xiaohan \
  -e MYSQL_DATABASE=jira \
  -e MYSQL_USER=jira \
  -e MYSQL_PASSWORD=jira \
  mysql:5.7

docker run -d \
  --name jira \
  --hostname jira \
  --link mysql-db:mysql \
  -p 20011:8085 \
  -p 20012:8080 \
  -p 20013:8443 \
  -p 20014:8090 \
  -p 20015:22 \
  idoall/jira
```


参考：

- https://www.zybuluo.com/lsmn/note/1272609
- http://www.shdsd.com/news//92.html
- https://www.cnblogs.com/lion.net/p/6281668.html
