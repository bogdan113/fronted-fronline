var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var AppBaseView = require ('./app/layout');
var NotFoundView = require ('./404/layout');
var HomeView = require ('./home/layout');

var routes = (
	<Route name = "baseAppRouter" path = "/" handler = {AppBaseView}>
		<NotFoundRoute handler = {NotFoundView} />
		<DefaultRoute handler = {HomeView} />
	</Route>
);

module.exports = routes;
