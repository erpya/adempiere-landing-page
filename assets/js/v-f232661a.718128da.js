"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1878],{3696:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$});var r=o(8e3);const n=(0,r._)("p",null,[(0,r._)("img",{src:"/assets/img/product/source-code.png",alt:"Source Code"})],-1),i=(0,r._)("h2",{id:"adempiere-project-repository",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#adempiere-project-repository","aria-hidden":"true"},"#"),(0,r.Uk)(" Adempiere Project Repository")],-1),l=(0,r.Uk)("The ADempiere main repository can be found in "),a={href:"https://github.com/adempiere/adempiere",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("GitHub"),c=(0,r.Uk)("."),d={class:"custom-container tip"},p=(0,r._)("p",{class:"custom-container-title"},"Git",-1),u=(0,r.Uk)("Before proceeding, please refer to the "),m={href:"http://git-scm.com/doc",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("Git SCM Documentation"),g=(0,r.Uk)("To collaborate with the ADempiere team, we use the Git Hub Fork and Pull model. From the "),f={href:"https://help.github.com/articles/using-pull-requests/#fork--pull",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("GitHub website"),y={class:"custom-container tip"},_=(0,r._)("p",{class:"custom-container-title"},"Collabotate",-1),w=(0,r.Uk)("To collaborate with the ADempiere team, we use the Git Hub Fork and Pull model. From the "),k={href:"https://help.github.com/articles/using-pull-requests/#fork--pull",target:"_blank",rel:"noopener noreferrer"},v=(0,r.Uk)("GitHub website"),C=(0,r._)("p",null,"The fork & pull model lets anyone fork an existing repository and push changes to their personal fork without requiring access be granted to the source repository. The changes must then be pulled into the source repository by the project maintainer. This model reduces the amount of friction for new contributors and is popular with open source projects because it allows people to work independently without upfront coordination.",-1),F=(0,r.Uk)("Refer to the GitHub article on "),S={href:"https://help.github.com/articles/using-pull-requests",target:"_blank",rel:"noopener noreferrer"},G=(0,r.Uk)("Pull Requests"),U=(0,r.Uk)(" for more information and instructions on how to get started."),D=(0,r._)("h3",{id:"summary-instructions",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#summary-instructions","aria-hidden":"true"},"#"),(0,r.Uk)(" Summary Instructions")],-1),T=(0,r._)("p",null,"The setup is easy. Follow these steps:",-1),A=(0,r.Uk)("Install the Git Software. You can work with the Git command line or any of a number of Git GUI tools. As the repository is on GitHub, it is recommended to follow the "),j={href:"https://help.github.com/articles/set-up-git/",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("GitHub setup procedures"),I=(0,r.Uk)("."),H=(0,r._)("li",null,"Create a GitHub account",-1),P=(0,r._)("li",null,"Create your personal fork of the Adempiere project",-1),R=(0,r._)("li",null,"Create a local clone of your personal fork",-1),W=(0,r._)("li",null,"Start developing!",-1),N=(0,r.Uk)("Commit your work to your own fork. Follow the "),q={href:"http://wiki.adempiere.net/Software_Development_Procedure",target:"_blank",rel:"noopener noreferrer"},z=(0,r.Uk)("Adempiere Software Development Procedure"),B=(0,r.Uk)(" for branch naming."),E=(0,r._)("li",null,"Send a pull request to the Adempiere project.",-1),O=(0,r._)("h3",{id:"cloning-a-repository",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#cloning-a-repository","aria-hidden":"true"},"#"),(0,r.Uk)(" Cloning a Repository")],-1),Z=(0,r._)("p",null,"Cloning a repository to your local computer is simple. Follow the instructions with the GitHub software or your GUI tool, many of which allow for cloning a GitHub repository to a local computer with a few mouse clicks. If you want to do it from the command line,",-1),L=(0,r._)("div",{class:"language-Shell ext-Shell line-numbers-mode"},[(0,r._)("pre",{class:"language-Shell"},[(0,r._)("code",null,"# Navigate to the parent directory where the repository will be placed and type the following command\ngit clone https://github.com/adempiere/adempiere\n")]),(0,r._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"})])],-1),M=(0,r._)("p",null,"This will create a directory using the url project name, initialize a .git directory inside it, pull down all the data for that repository, and check out a working copy of the latest version. If you go into the new directory, you'll see the project files in there, ready to be worked on or used.",-1),Y=(0,r._)("p",null,"To change the name of clone directory use the following",-1),J=(0,r._)("div",{class:"language-Shell ext-Shell line-numbers-mode"},[(0,r._)("pre",{class:"language-Shell"},[(0,r._)("code",null,"# Navigate to the parent directory where the repository will be placed and type the following command\ngit clone https://github.com/adempiere/adempiere <Optional Name>\n")]),(0,r._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"})])],-1),K=(0,r._)("h3",{id:"cloning-the-repository-with-a-slow-connection",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#cloning-the-repository-with-a-slow-connection","aria-hidden":"true"},"#"),(0,r.Uk)(" Cloning the Repository with a Slow Connection")],-1),Q=(0,r._)("p",null,"To clone a repository over a slow or intermittent Internet connection, try using git fetch instead of clone as follows:",-1),V=(0,r._)("div",{class:"language-Shell ext-Shell line-numbers-mode"},[(0,r._)("pre",{class:"language-Shell"},[(0,r._)("code",null,'  # Go to default folder\n  cd /opt/Development/repos\n\n  # Create a directory for the repo and change to it\n  mkdir adempiere\n\n  # Go to new folder\n  cd adempiere\n\n  # Initialize the repository\n  git init\n  Initialized empty Git repository in /opt/Development/repos/github/adempiere/.git/\n\n  # The default reference to the source repository in a clone is "origin".  Clone your\n  # personal fork from your account <account>.\n  git remote add origin https://github.com/adempiere/adempiere.git\n\n  # Fetch the contents.\n  git fetch\n\n  # Update to the current master branch - for example\n  git reset --hard origin/master\n')]),(0,r._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"}),(0,r._)("div",{class:"line-number"})])],-1),X={},$=(0,o(3860).Z)(X,[["render",function(e,t){const o=(0,r.up)("ExternalLinkIcon"),X=(0,r.up)("CodeDemo");return(0,r.wg)(),(0,r.iD)("div",null,[n,i,(0,r._)("p",null,[l,(0,r._)("a",a,[s,(0,r.Wm)(o)]),c]),(0,r._)("div",d,[p,(0,r._)("p",null,[u,(0,r._)("a",m,[h,(0,r.Wm)(o)])]),(0,r._)("p",null,[g,(0,r._)("a",f,[b,(0,r.Wm)(o)])])]),(0,r._)("div",y,[_,(0,r._)("p",null,[w,(0,r._)("a",k,[v,(0,r.Wm)(o)])])]),C,(0,r._)("p",null,[F,(0,r._)("a",S,[G,(0,r.Wm)(o)]),U]),D,T,(0,r._)("ul",null,[(0,r._)("li",null,[A,(0,r._)("a",j,[x,(0,r.Wm)(o)]),I]),H,P,R,W,(0,r._)("li",null,[N,(0,r._)("a",q,[z,(0,r.Wm)(o)]),B]),E]),O,Z,(0,r.Wm)(X,{id:"code-demo-0faae894",type:"vue",title:"Clone%20the%20project%20default",code:"%7B%22Shell%22%3A%22%23%20Navigate%20to%20the%20parent%20directory%20where%20the%20repository%20will%20be%20placed%20and%20type%20the%20following%20command%5Cngit%20clone%20https%3A%2F%2Fgithub.com%2Fadempiere%2Fadempiere%5Cn%22%7D"},{default:(0,r.w5)((()=>[L])),_:1}),M,Y,(0,r.Wm)(X,{id:"code-demo-7fd5deb8",type:"vue",title:"Clone%20the%20project%20with%20Optional%20Name",code:"%7B%22Shell%22%3A%22%23%20Navigate%20to%20the%20parent%20directory%20where%20the%20repository%20will%20be%20placed%20and%20type%20the%20following%20command%5Cngit%20clone%20https%3A%2F%2Fgithub.com%2Fadempiere%2Fadempiere%20%3COptional%20Name%3E%5Cn%22%7D"},{default:(0,r.w5)((()=>[J])),_:1}),K,Q,(0,r.Wm)(X,{id:"code-demo-0806e0ec",type:"vue",title:"For%20Linux",code:"%7B%22Shell%22%3A%22%20%20%23%20Go%20to%20default%20folder%5Cn%20%20cd%20%2Fopt%2FDevelopment%2Frepos%5Cn%5Cn%20%20%23%20Create%20a%20directory%20for%20the%20repo%20and%20change%20to%20it%5Cn%20%20mkdir%20adempiere%5Cn%5Cn%20%20%23%20Go%20to%20new%20folder%5Cn%20%20cd%20adempiere%5Cn%5Cn%20%20%23%20Initialize%20the%20repository%5Cn%20%20git%20init%5Cn%20%20Initialized%20empty%20Git%20repository%20in%20%2Fopt%2FDevelopment%2Frepos%2Fgithub%2Fadempiere%2F.git%2F%5Cn%5Cn%20%20%23%20The%20default%20reference%20to%20the%20source%20repository%20in%20a%20clone%20is%20%5C%22origin%5C%22.%20%20Clone%20your%5Cn%20%20%23%20personal%20fork%20from%20your%20account%20%3Caccount%3E.%5Cn%20%20git%20remote%20add%20origin%20https%3A%2F%2Fgithub.com%2Fadempiere%2Fadempiere.git%5Cn%5Cn%20%20%23%20Fetch%20the%20contents.%5Cn%20%20git%20fetch%5Cn%5Cn%20%20%23%20Update%20to%20the%20current%20master%20branch%20-%20for%20example%5Cn%20%20git%20reset%20--hard%20origin%2Fmaster%5Cn%22%7D"},{default:(0,r.w5)((()=>[V])),_:1})])}]])},8462:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-f232661a","path":"/product/source-code.html","title":"Source Code","lang":"en-US","frontmatter":{"title":"Source Code","category":["Source Code"],"star":9,"sticky":9,"tag":["Demo","Product","Github"],"article":false,"summary":"Adempiere Project Repository The ADempiere main repository can be found in GitHub. Git Before proceeding, please refer to the Git SCM Documentation To collaborate with the ADempier","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/product/source-code.html"}],["meta",{"property":"og:title","content":"Source Code"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-02-13T15:22:23.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"es-ES"}],["meta",{"property":"article:tag","content":"Demo"}],["meta",{"property":"article:tag","content":"Product"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:modified_time","content":"2023-02-13T15:22:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Adempiere Project Repository","slug":"adempiere-project-repository","children":[{"level":3,"title":"Summary Instructions","slug":"summary-instructions","children":[]},{"level":3,"title":"Cloning a Repository","slug":"cloning-a-repository","children":[]},{"level":3,"title":"Cloning the Repository with a Slow Connection","slug":"cloning-the-repository-with-a-slow-connection","children":[]}]}],"git":{"createdTime":1676301743000,"updatedTime":1676301743000,"contributors":[{"name":"Yamel Senih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"product/source-code.md","localizedDate":"February 13, 2023"}')}}]);