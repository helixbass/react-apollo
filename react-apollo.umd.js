(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('react'),require('object-assign'),require('prop-types'),require('invariant'),require('fbjs/lib/shallowEqual'),require('lodash/pick'),require('hoist-non-react-statics'),require('lodash/flowRight'),require('react-dom/server')):'function'==typeof define&&define.amd?define(['exports','react','object-assign','prop-types','invariant','fbjs/lib/shallowEqual','lodash/pick','hoist-non-react-statics','lodash/flowRight','react-dom/server'],b):b(a['react-apollo']={},a.React,a.assign,a.PropTypes,a.invariant,a.shallowEqual,a.pick,a.hoistNonReactStatics,a.flowRight,a.server)})(this,function(a,b,c,d,e,f,g,h,i,j){'use strict';function k(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,'default')?a['default']:a}function l(a,b){return b={exports:{}},a(b,b.exports),b.exports}b=b&&b.hasOwnProperty('default')?b['default']:b,c=c&&c.hasOwnProperty('default')?c['default']:c,d=d&&d.hasOwnProperty('default')?d['default']:d,e=e&&e.hasOwnProperty('default')?e['default']:e,f=f&&f.hasOwnProperty('default')?f['default']:f,g=g&&g.hasOwnProperty('default')?g['default']:g,h=h&&h.hasOwnProperty('default')?h['default']:h,i=i&&i.hasOwnProperty('default')?i['default']:i,j=j&&j.hasOwnProperty('default')?j['default']:j;var m='undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window,n=l(function(a,d){function e(a){return a.props||a.attributes}function f(a){return!!a.type}function g(a){return a.prototype&&(a.prototype.render||a.prototype.isReactComponent)}function h(a){return!!a.getChildContext}function i(a,d,j){if(Array.isArray(a))return void a.forEach(function(a){return i(a,d,j)});if(a)if(!f(a))('string'==typeof a||'number'==typeof a)&&j(a,null,d);else if('function'==typeof a.type){var k,l=a.type,m=c({},l.defaultProps,e(a)),n=d;if(g(l)){var o=new l(m,d);if(o.props=o.props||m,o.context=o.context||d,o.state=o.state||null,o.setState=function(a){'function'==typeof a&&(a=a(o.state,o.props,o.context)),o.state=c({},o.state,a)},o.componentWillMount&&o.componentWillMount(),h(o)&&(n=c({},d,o.getChildContext())),!1===j(a,o,d))return;k=o.render()}else{if(!1===j(a,null,d))return;k=l(m,d)}k&&(Array.isArray(k)?k.forEach(function(a){return i(a,d,j)}):i(k,n,j))}else{if(!1===j(a,null,d))return;a.props&&a.props.children&&b.Children.forEach(a.props.children,function(a){a&&i(a,d,j)})}}function j(a){return'function'==typeof a.fetchData}function k(a){return'function'==typeof a.then}function l(a,b){var c=a.rootElement,d=a.rootContext,e=void 0===d?{}:d;void 0===b&&(b=!0);var g=[];return i(c,e,function(a,d,e){var h=!b&&a===c;if(!h&&d&&f(a)&&j(d)){var i=d.fetchData();if(k(i))return g.push({query:i,element:a,context:e}),!1}}),g}function m(a,b,c){void 0===b&&(b={}),void 0===c&&(c=!0);var d=l({rootElement:a,rootContext:b},c);if(!d.length)return Promise.resolve();var f=[],e=d.map(function(a){var b=a.query,c=a.element,d=a.context;return b.then(function(){return m(c,d,!1)}).catch(function(a){return f.push(a)})});return Promise.all(e).then(function(){if(0<f.length){var a=1===f.length?f[0]:new Error(f.length+' errors were thrown when executing your GraphQL queries.');throw a.queryErrors=f,a}})}Object.defineProperty(d,'__esModule',{value:!0}),d.walkTree=i,d.default=m});k(n);var o=n.walkTree,p=l(function(a,b){Object.defineProperty(b,'__esModule',{value:!0});var c=function(a,b){return e(!!b.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>'),a.children(b.client)};c.contextTypes={client:d.object.isRequired},b.default=c});k(p);var q=l(function(a,b){var c=m&&m.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},d=m&&m.__rest||function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&'function'==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&(c[d[e]]=a[d[e]]);return c};Object.defineProperty(b,'__esModule',{value:!0});var e=function(){function a(){this.observableQueries=[]}return a.prototype.recycle=function(a){a.setOptions({fetchPolicy:'standby',pollInterval:0,fetchResults:!1}),this.observableQueries.push({observableQuery:a,subscription:a.subscribe({})})},a.prototype.reuse=function(a){if(0>=this.observableQueries.length)return null;var b=this.observableQueries.pop();if(!b)return null;var e=b.observableQuery,g=b.subscription;g.unsubscribe();var h=a.ssr,i=a.client,j=d(a,['ssr','client']);return f(j.variables||{},e.variables)?(e.setOptions(c({},j,{pollInterval:a.pollInterval,fetchPolicy:a.fetchPolicy})),e):null},a}();b.ObservableQueryRecycler=e});k(q);var r=q.ObservableQueryRecycler,s=l(function(a,c){var e=m&&m.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(c,'__esModule',{value:!0});var f=function(a){function b(b){var c=a.call(this,b)||this;return c.recyclers=new WeakMap,c.getQueryRecycler=c.getQueryRecycler.bind(c),c}return e(b,a),b.prototype.componentWillReceiveProps=function(a,b){this.context.client!==b.client&&(this.recyclers=new WeakMap)},b.prototype.getQueryRecycler=function(a){return this.recyclers.has(a)||this.recyclers.set(a,new q.ObservableQueryRecycler),this.recyclers.get(a)},b.prototype.getChildContext=function(){return{getQueryRecycler:this.getQueryRecycler}},b.prototype.render=function(){return this.props.children},b.propTypes={children:d.element.isRequired},b.contextTypes={client:d.object},b.childContextTypes={getQueryRecycler:d.func.isRequired},b}(b.Component);c.default=f});k(s);var t=l(function(a,c){var f=m&&m.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}();Object.defineProperty(c,'__esModule',{value:!0});var g=b,h=function(a){function c(b,c){var d=a.call(this,b,c)||this;return e(b.client,'ApolloClient was not passed a client instance. Make sure you pass in your client via the "client" prop.'),d}return f(c,a),c.prototype.getChildContext=function(){return{client:this.props.client}},c.prototype.render=function(){return b.createElement(s.default,null,b.Children.only(this.props.children))},c.propTypes={client:d.object.isRequired,children:d.element.isRequired},c.childContextTypes={client:d.object.isRequired},c}(g.Component);c.default=h});k(t);var u=l(function(a,b){Object.defineProperty(b,'__esModule',{value:!0});var c;(function(a){a[a.Query=0]='Query',a[a.Mutation=1]='Mutation',a[a.Subscription=2]='Subscription'})(c=b.DocumentType||(b.DocumentType={})),b.parser=function(a){var b,d,f;e(!!a&&!!a.kind,'Argument of '+a+' passed to parser was not a valid GraphQL DocumentNode. You may need to use \'graphql-tag\' or another method to convert your operation into a document');var g=a.definitions.filter(function(a){return'FragmentDefinition'===a.kind}),h=a.definitions.filter(function(a){return'OperationDefinition'===a.kind&&'query'===a.operation}),i=a.definitions.filter(function(a){return'OperationDefinition'===a.kind&&'mutation'===a.operation}),j=a.definitions.filter(function(a){return'OperationDefinition'===a.kind&&'subscription'===a.operation});e(!g.length||h.length||i.length||j.length,'Passing only a fragment to \'graphql\' is not yet supported. You must include a query, subscription or mutation as well'),e(1>=h.length+i.length+j.length,'react-apollo only supports a query, subscription, or a mutation per HOC. '+(a+' had '+h.length+' queries, '+j.length+' ')+('subscriptions and '+i.length+' mutations. You can use \'compose\' to join multiple operation types to a component')),d=h.length?c.Query:c.Mutation,h.length||i.length||(d=c.Subscription);var k=h.length?h:i.length?i:j;e(1===k.length,'react-apollo only supports one defintion per HOC. '+a+' had '+(k.length+' definitions. You can use \'compose\' to join multiple operation types to a component'));var l=k[0];return b=l.variableDefinitions||[],f=l.name&&'Name'===l.name.kind?l.name.value:'data',{name:f,type:d,variables:b}}});k(u);var v=u.DocumentType,w=u.parser,x=l(function(a,c){function h(a){var b=g(a,'refetch','fetchMore','updateQuery','startPolling','stopPolling');return Object.keys(b).forEach(function(c){var d=c;'function'==typeof b[d]&&(b[d]=b[d].bind(a))}),b}function i(a){return 0<Object.keys(a).length}var j=m&&m.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}(),k=m&&m.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},l=m&&m.__rest||function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&'function'==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&(c[d[e]]=a[d[e]]);return c};Object.defineProperty(c,'__esModule',{value:!0});var n=function(a){function b(b,c){var d=a.call(this,b,c)||this;return d.initializeQueryObservable=function(a){var b=a.variables,c=a.pollInterval,f=a.fetchPolicy,g=a.notifyOnNetworkStatusChange,h=a.query,i=u.parser(h);e(i.type===u.DocumentType.Query,'The <Query /> component requires a graphql query, but got a '+(i.type===u.DocumentType.Mutation?'mutation':'subscription')+'.');d.queryObservable=d.client.watchQuery({variables:b,pollInterval:c,query:h,fetchPolicy:f,notifyOnNetworkStatusChange:g})},d.startQuerySubscription=function(){d.querySubscription=d.queryObservable.subscribe({next:d.updateCurrentData,error:function(a){if(d.resubscribeToQuery(),!a.hasOwnProperty('graphQLErrors'))throw a;d.updateCurrentData()}})},d.removeQuerySubscription=function(){d.querySubscription&&d.querySubscription.unsubscribe()},d.updateCurrentData=function(){d.setState({result:d.queryObservable.currentResult()})},d.getQueryResult=function(){var a=d.state.result,b=a.loading,c=a.error,e=a.networkStatus,f=a.data;return k({client:d.client,data:i(f)?f:void 0,loading:b,error:c,networkStatus:e},h(d.queryObservable))},e(!!c.client,'Could not find "client" in the context of Query. Wrap the root component in an <ApolloProvider>'),d.client=c.client,d.initializeQueryObservable(b),d.state={result:d.queryObservable.currentResult()},d}return j(b,a),b.prototype.fetchData=function(){var a=this.props,b=a.children,c=a.ssr,d=l(a,['children','ssr']),e=d.fetchPolicy;if(!1===c)return!1;('network-only'===e||'cache-and-network'===e)&&(e='cache-first');var f=this.client.watchQuery(k({},d,{fetchPolicy:e})),g=this.queryObservable.currentResult();return!!g.loading&&f.result()},b.prototype.componentDidMount=function(){this.startQuerySubscription()},b.prototype.componentWillReceiveProps=function(a,b){f(this.props,a)&&this.client===b.client||(this.client!==b.client&&(this.client=b.client),this.removeQuerySubscription(),this.initializeQueryObservable(a),this.startQuerySubscription(),this.updateCurrentData())},b.prototype.componentWillUnmount=function(){this.removeQuerySubscription()},b.prototype.render=function(){var a=this.props.children,b=this.getQueryResult();return a(b)},b.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var a=this.queryObservable.getLastError(),b=this.queryObservable.getLastResult();this.queryObservable.resetLastResults(),this.startQuerySubscription(),Object.assign(this.queryObservable,{lastError:a,lastResult:b})},b.contextTypes={client:d.object.isRequired},b}(b.Component);c.default=n});k(x);var y=l(function(a,i){function j(a){var b=g(a,'variables','refetch','fetchMore','updateQuery','startPolling','stopPolling','subscribeToMore');return Object.keys(b).forEach(function(c){var d=c;'function'==typeof b[d]&&(b[d]=b[d].bind(a))}),b}function k(a){return a.displayName||a.name||'Component'}var l=m&&m.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}(),n=m&&m.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a};Object.defineProperty(i,'__esModule',{value:!0});var o=function(){return{}},p=function(a){return a},q=function(){return!1},r=0;i.default=function(a,g){void 0===g&&(g={});var i=g.options,m=void 0===i?o:i,s=g.skip,t=void 0===s?q:s,v=g.alias,w=void 0===v?'Apollo':v,x=m;'function'!=typeof x&&(x=function(){return m});var y=t;'function'!=typeof y&&(y=function(){return t});var z=g.props,A=u.parser(a),B=r++;return function(i){var m=w+'('+k(i)+')',o=function(h){function o(a,b){var c=h.call(this,a,b)||this;return c.previousData={},c.version=B,c.type=A.type,c.dataForChildViaMutation=c.dataForChildViaMutation.bind(c),c.setWrappedInstance=c.setWrappedInstance.bind(c),c}return l(o,h),o.prototype.componentWillMount=function(){this.shouldSkip(this.props)||this.setInitialProps()},o.prototype.componentDidMount=function(){if((this.hasMounted=!0,this.type!==u.DocumentType.Mutation)&&!this.shouldSkip(this.props)&&(this.subscribeToQuery(),this.refetcherQueue)){var a=this.refetcherQueue,b=a.args,c=a.resolve,d=a.reject;this.queryObservable.refetch(b).then(c).catch(d)}},o.prototype.componentWillReceiveProps=function(a,b){if(this.shouldSkip(a))return void(this.shouldSkip(this.props)||this.unsubscribeFromQuery());var c=x(a).client;if(!(f(this.props,a)&&(this.client===c||this.client===b.client)))return this.shouldRerender=!0,this.client!==c&&this.client!==b.client?(this.client=c?c:b.client,this.unsubscribeFromQuery(),this.queryObservable=null,this.previousData={},this.updateQuery(a),void(this.shouldSkip(a)||this.subscribeToQuery())):this.type===u.DocumentType.Mutation?void 0:this.type===u.DocumentType.Subscription&&g.shouldResubscribe&&g.shouldResubscribe(this.props,a)?(this.unsubscribeFromQuery(),delete this.queryObservable,this.updateQuery(a),void this.subscribeToQuery()):void(this.updateQuery(a),this.subscribeToQuery())},o.prototype.componentWillUnmount=function(){if(this.type===u.DocumentType.Query){if(this.queryObservable){var a=this.getQueryRecycler();a&&(a.recycle(this.queryObservable),delete this.queryObservable)}this.unsubscribeFromQuery()}this.type===u.DocumentType.Subscription&&this.unsubscribeFromQuery(),this.hasMounted=!1},o.prototype.getQueryRecycler=function(){return this.context.getQueryRecycler&&this.context.getQueryRecycler(o)},o.prototype.getClient=function(a){if(this.client)return this.client;var b=x(a).client;return this.client=b?b:this.context.client,e(!!this.client,'Could not find "client" in the context of "'+m+'". Wrap the root component in an <ApolloProvider>'),this.client},o.prototype.calculateOptions=function(a,b){void 0===a&&(a=this.props);var d=x(a);if(b&&b.variables&&(b.variables=c({},d.variables,b.variables)),b&&(d=c({},d,b)),d.variables||!A.variables.length)return d;for(var f={},g=0,h=A.variables;g<h.length;g++){var j=h[g],l=j.variable,o=j.type;if(l.name&&l.name.value){var p=l.name.value,q=a[p];if('undefined'!=typeof q){f[p]=q;continue}if('NonNullType'!==o.kind){f[p]=null;continue}e('undefined'!=typeof q,'The operation \''+A.name+'\' wrapping \''+k(i)+'\' '+('is expecting a variable: \''+l.name.value+'\' but it was not found in the props ')+('passed to \''+m+'\''))}}return d=n({},d,{variables:f}),d},o.prototype.calculateResultProps=function(a){var b=this.type===u.DocumentType.Mutation?'mutate':'data';g.name&&(b=g.name);var c=(d={},d[b]=a,d.ownProps=this.props,d);return z?z(c):(e={},e[b]=p(a),e);var d,e},o.prototype.setInitialProps=function(){if(this.type!==u.DocumentType.Mutation){var a=this.calculateOptions(this.props);this.createQuery(a)}},o.prototype.createQuery=function(b,d){if(void 0===d&&(d=this.props),this.type===u.DocumentType.Subscription)this.queryObservable=this.getClient(d).subscribe(c({query:a},b));else{var e=this.getQueryRecycler(),f=null;e&&(f=e.reuse(b)),this.queryObservable=null===f?this.getClient(d).watchQuery(c({query:a,metadata:{reactComponent:{displayName:m}}},b)):f}},o.prototype.updateQuery=function(a){var b=this.calculateOptions(a);this.queryObservable||this.createQuery(b,a),this.queryObservable._setOptionsNoResult?this.queryObservable._setOptionsNoResult(b):this.queryObservable.setOptions&&this.queryObservable.setOptions(b).catch(function(){return null})},o.prototype.fetchData=function(){if(this.shouldSkip())return!1;if(A.type===u.DocumentType.Mutation||A.type===u.DocumentType.Subscription)return!1;var b=this.calculateOptions();if(!1===b.ssr)return!1;('network-only'===b.fetchPolicy||'cache-and-network'===b.fetchPolicy)&&(b.fetchPolicy='cache-first');var d=this.getClient(this.props).watchQuery(c({query:a},b)),e=d.currentResult();return!!e.loading&&d.result()},o.prototype.subscribeToQuery=function(){var a=this;if(!this.querySubscription){var b=function(b){a.type===u.DocumentType.Subscription&&(a.lastSubscriptionData=b);var c=Object.keys(j(b.data));e(0===c.length,'the result of the \''+m+'\' operation contains keys that conflict with the return object.'+c.map(function(a){return'\''+a+'\''}).join(', ')+' not allowed.'),a.forceRenderChildren()},c=function(c){if(a.resubscribeToQuery(),c.hasOwnProperty('graphQLErrors'))return b({error:c});throw c};this.querySubscription=this.queryObservable.subscribe({next:b,error:c})}},o.prototype.unsubscribeFromQuery=function(){this.querySubscription&&(this.querySubscription.unsubscribe(),delete this.querySubscription)},o.prototype.resubscribeToQuery=function(){var a=this.querySubscription;a&&delete this.querySubscription;var b=this.queryObservable,c=b.lastError,d=b.lastResult;this.queryObservable.resetLastResults(),this.subscribeToQuery(),Object.assign(this.queryObservable,{lastError:c,lastResult:d}),a&&a.unsubscribe()},o.prototype.shouldSkip=function(a){return void 0===a&&(a=this.props),y(a)},o.prototype.forceRenderChildren=function(){this.shouldRerender=!0,this.hasMounted&&this.forceUpdate()},o.prototype.getWrappedInstance=function(){return e(g.withRef,'To access the wrapped instance, you need to specify { withRef: true } in the options'),this.wrappedInstance},o.prototype.setWrappedInstance=function(a){this.wrappedInstance=a},o.prototype.dataForChildViaMutation=function(b){var c=this.calculateOptions(this.props,b);return'undefined'==typeof c.variables&&delete c.variables,c.mutation=a,this.getClient(this.props).mutate(c)},o.prototype.dataForChild=function(){var a=this;if(this.type===u.DocumentType.Mutation)return this.dataForChildViaMutation;var b=this.calculateOptions(this.props),d={};if(c(d,j(this.queryObservable)),this.type===u.DocumentType.Subscription)c(d,{loading:!this.lastSubscriptionData,variables:b.variables},this.lastSubscriptionData&&this.lastSubscriptionData.data);else{var e=this.queryObservable.currentResult(),f=e.loading,g=e.error,h=e.networkStatus;c(d,{loading:f,networkStatus:h});var i=setTimeout(function(){if(g){var a=g;g.stack&&(a=g.stack.includes(g.message)?g.stack:g.message+'\n'+g.stack),console.error('Unhandled (in react-apollo:'+m+')',a)}},10);Object.defineProperty(d,'error',{configurable:!0,enumerable:!0,get:function(){return clearTimeout(i),g}}),f?c(d,this.previousData,e.data):g?c(d,(this.queryObservable.getLastResult()||{}).data):(c(d,e.data),this.previousData=e.data),this.querySubscription||(d.refetch=function(b){return new Promise(function(c,d){a.refetcherQueue={resolve:c,reject:d,args:b}})})}return d},o.prototype.render=function(){if(this.shouldSkip())return g.withRef?b.createElement(i,n({},c({},this.props,{ref:this.setWrappedInstance}))):b.createElement(i,n({},this.props));var a=this,d=a.shouldRerender,e=a.renderedElement,f=a.props;if(this.shouldRerender=!1,!d&&e&&e.type===i)return e;var h=this.dataForChild(),j=this.calculateResultProps(h),k=c({},f,j);return g.withRef&&(k.ref=this.setWrappedInstance),this.renderedElement=b.createElement(i,n({},k)),this.renderedElement},o.displayName=m,o.WrappedComponent=i,o.contextTypes={client:d.object,getQueryRecycler:d.func},o}(b.Component);return h(o,i,g.hoistBlacklist||{})}}});k(y);var z=l(function(a,d){function f(a){return a.displayName||a.name||'Component'}var g=m&&m.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(c,d){function b(){this.constructor=c}a(c,d),c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}(),i=m&&m.__assign||Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a};Object.defineProperty(d,'__esModule',{value:!0}),d.default=function(a,d){void 0===d&&(d={});var j='withApollo('+f(a)+')',k=function(f){function h(a){var b=f.call(this,a)||this;return b.setWrappedInstance=b.setWrappedInstance.bind(b),b}return g(h,f),h.prototype.getWrappedInstance=function(){return e(d.withRef,'To access the wrapped instance, you need to specify { withRef: true } in the options'),this.wrappedInstance},h.prototype.setWrappedInstance=function(a){this.wrappedInstance=a},h.prototype.render=function(){var e=this;return b.createElement(p.default,null,function(f){var g=c({},e.props,{client:f,ref:d.withRef?e.setWrappedInstance:void 0});return b.createElement(a,i({},g))})},h.displayName=j,h.WrappedComponent=a,h}(b.Component);return h(k,a,{})}});k(z);var A=l(function(a,b){function c(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}Object.defineProperty(b,'__esModule',{value:!0}),b.getDataFromTree=n.default,c(n),b.ApolloConsumer=p.default,c(p),b.ApolloProvider=t.default,c(t),b.Query=x.default,c(x),b.graphql=y.default,c(y),b.withApollo=z.default,b.compose=i});k(A);var B=A.getDataFromTree,C=A.ApolloConsumer,D=A.ApolloProvider,E=A.Query,F=A.graphql,G=A.withApollo,H=A.compose,I=l(function(a,b){Object.defineProperty(b,'__esModule',{value:!0}),b.renderToStringWithData=function(a){return n.default(a).then(function(){return j.renderToString(a)})}});k(I);var J=I.renderToStringWithData,K=l(function(a,b){Object.defineProperty(b,'__esModule',{value:!0}),function(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}(A),b.renderToStringWithData=I.renderToStringWithData}),L=k(K),M=K.renderToStringWithData;a.default=L,a.renderToStringWithData=M,Object.defineProperty(a,'__esModule',{value:!0})});
