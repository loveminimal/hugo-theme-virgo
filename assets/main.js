import greet from "js/init/greet";
import initEventBinding from "js/init/eventBinding";
import initCodeBlock from "js/init/initCodeBlock";
import initNavLink from "js/init/initNavLink";
import enhanceOrgMode from './js/init/enhanceOrgMode';
import enhanceMarkdown from './js/init/enhanceMarkdown';

greet();
enhanceOrgMode();
initNavLink();
initCodeBlock();
enhanceMarkdown();
initEventBinding();