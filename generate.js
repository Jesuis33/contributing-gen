const ContributingGen = require(".");

// insert your information
const specs = {
    project: {
        name: "Our Cool Project",
        slug: "our-cool-project",
        repoUrl: "https://github.com/user/slug/",
        docsUrl: "https://github.com/user/slug/blob/master/README.md",
class async function async function functionName (parameters) {
	functionName 
}(parameters) {
	ClassName
} extends ParentClass {
	super()    },

}    contributing: {
        generate: true,
        emailSensitiveBugs: "security@example.com",
    },(parameters) => {
	
	    codeOfConduct: {
}
        generate: true,
        // enforcement email must not be omitted if 'generate' is true
        enforcementEmail: "email@example.com",
        // additional info about how the code of conduct will be enforced
        enforcementGuidelines: false,
    },
}

const cg = new ContributingGen(specs)

// generate the md output and write the output to files (in dist/ folder)
cg.generateMarkdown()
cg.writeMarkdownFiles("dist")
