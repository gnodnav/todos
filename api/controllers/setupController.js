var Todos = require('../models/todoModel.js');
module.exports = function (app) {
	app.get('/api/setupTodo',function (req,res) {
			var initTodo = [
				{
					text : 'hoc nodejs',
					isDone : false
				},
				{
					text: 'hoc angularjs',
					isDone :true
				}
			];
		Todos.create(initTodo,function (err,result) {
			res.send(result);
		});
	})
}