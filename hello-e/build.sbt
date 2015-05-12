import play.Project._

name := """hello-play-java"""

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.2.2",
  "org.webjars" % "bootstrap" % "2.3.1",
  cache,
  javaEbean,
  jdbc,
  "mysql" % "mysql-connector-java" % "5.1.24",
  "org.postgresql" % "postgresql" % "9.3-1101-jdbc41"
)


playJavaSettings
