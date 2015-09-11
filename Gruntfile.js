module.exports = function(grunt) {
	//load package JSON
	var pkg = grunt.file.readJSON("package.json");

	//initialize grunt
	grunt.initConfig({
		pkg: pkg,
		concat: {
			javascript: {
				src: [
					'sdk/ap/**.js',
					'sdk/utility/create_class.js',
		      'sdk/utility/base64.js',
		      'sdk/utility/cookie.js',
		      'sdk/utility/url.js',
		      'sdk/utility/mock_server.js',
		      'sdk/utility/validator.js',
		      'sdk/utility/transient_store.js',
		      'sdk/utility/transient_cookie_store.js',
		      'sdk/utility/transient_local_store.js',
		      'sdk/utility/transient_large_local_store.js',
					'sdk/utility/json.js',
					'sdk/utility/xml.js',
		      'sdk/auth/**.js',
		      'sdk/model/**.js',
		      'sdk/relationship/relationship.js',
		      'sdk/relationship/belongs_to_relationship.js',
		      'sdk/relationship/has_many_relationship.js',
		      'sdk/relationship/has_one_relationship.js',
		      'sdk/collection/base_collection.js',
		      'sdk/collection/base_scope_collection.js',
		      'sdk/collection/base_aggregate_collection.js',
					'sdk/adapter/**.js',
		      'sdk/application/**.js',
					'sdk/adapters/**.js',
		      'sdk/models/**.js',
		      'sdk/collections/**.js',

		      'custom/**.js'
				],
				dest: 'ap_sdk.js'
			}
		},
		mocha_phantomjs: {
			all: ['test/index.html']
		},
	    watch: {
	      sdk: {
	        files: ['sdk/**/*.js'],
	        tasks: ['build', 'test']
		  },
	      test: {
	        files: ['test/**/*.js'],
	        tasks: ['test']
		  }
		},
	    yuidoc: {
	      all: {
	        name: '<%= pkg.name %>',
	        description: '<%= pkg.description %>',
	        version: '<%= pkg.version %>',
	        options: {
	          syntaxtype: 'js',
	          extension: '.js',
	          paths: ['./sdk'],
	          outdir: './docs/api'
			}
		  }
		},
	    guides: {
	      all: {
	        expand: true,
	        cwd: 'docs/guides/',
	        src: ['guides.json'],
	        ext: '.html',
	        template: 'guide.html.mustache',
		  }
		},
	    template: {
	      docs: {
	        src: 'docs/index.html.mustache',
	        dest: 'docs/index.html'
		  }
		}
	});

	grunt.registerMultiTask("guides", "Compile guides", function() {
		var markdown = require("markdown").markdown;
		this.filesSrc.forEach(function(filespath) {
			var guidesConfig = grunt.file.readJSON(filespath);
			for(var i=0; i<guidesConfig.length; i++) {
				var section = guidesConfig[i];
				for(var j=0; j<section.items.length; j++) {
					var guide = section.items[j];
					guide.section_name = section.name;
					var content = grunt.file.read(this.data.cwd+"/src/"+section.name+"/"+guide.name+"/README.md");
					var compiled = markdown.toHTML(content);
					grunt.log.writeln("Compiling guide source for \'"+section.title+": "+guide.title+"\'");
					grunt.config("template.guide-"+guide.name, {
						src: this.data.cwd+"/"+this.data.template,
						dest: this.data.cwd+"/"+section.name+"/"+guide.name+"/index.html",
						variables: {
							title: guide.title,
							name: guide.name,
							section_title: section.title,
							section_name: section.name,
							content: compiled
						}
					});
					grunt.config("template.docs.variables", {
						guides: guidesConfig
					});
				}
			}
		}.bind(this));

		grunt.task.run("template");
	});

	// load required grunt tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-templater');

	// define custom tasks
	grunt.registerTask('build', ['concat']);
	grunt.registerTask('build_docs', ['yuidoc', 'guides']);
	grunt.registerTask('test', ['mocha_phantomjs']);
}
