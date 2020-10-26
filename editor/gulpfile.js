var gulp = require("gulp");
var yaml = require("js-yaml");
var path = require("path");
var fs = require("fs");

//convert yamlt to json
gulp.task("swagger",function(done){
	var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname,"api/swagger/swagger.yaml")));
	fs.writeFileSync(
	path.join(__dirname,"../swagger.json"),
	JSON.stringify(doc,null," ")
);
done();
});



//watches for cheanges
gulp.task("watch",function(done){
	gulp.watch("api/swagger/swagger.yaml",gulp.series('swagger'));
	done();
});