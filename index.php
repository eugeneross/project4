<?php


require 'vendor/autoload.php';

require 'app/includes/dispatch.php';
require 'app/includes/functions.php';

config('source', 'app/config.ini');

get('/index', function () {

	$page = from($_GET, 'page');
	$page = $page ? (int)$page : 1;
	
	$posts = get_posts($page);
	
	if(empty($posts) || $page < 1){
		
		not_found();
	}
	
    render('main',array(
    	'page' => $page,
		'posts' => $posts,
		'has_pagination' => has_pagination($page)
	));
});


get('/:year/:month/:name',function($year, $month, $name){

	$post = find_post($year, $month, $name);

	if(!$post){
		not_found();
	}

	render('post',array(
		'title' => $post->title .' ⋅ ' . config('blog.title'),
		'p' => $post
	));
});


get('/api/json',function(){

	header('Content-type: application/json');

	
	echo generate_json(get_posts(1, 10));
});

// get('/rss',function(){

// 	header('Content-Type: application/rss+xml');

// 	// Show an RSS feed with the 30 latest posts
// 	echo generate_rss(get_posts(1, 30));
// });


get('.*',function(){
	not_found();
});

// Serve the blog
dispatch();
