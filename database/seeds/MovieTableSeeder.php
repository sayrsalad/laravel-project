<?php

use Illuminate\Database\Seeder;
use App\Movie;
use Faker\Factory as faker;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	        $faker = Faker::create();
	        foreach(range(1,10) as $index){
		        Movie::create([
				'movie_title' => $faker->catchPhrase(),
				'movie_story' => $faker->realText($maxNbChars = 25, $indexSize = 2),
				'movie_release_date'=> $faker->date($format = 'Y-m-d', $max = 'now'),
		        'movie_film_duration' => $faker->numberBetween($min = 90, $max = 185),
		        'movie_additional_info' =>  $faker->realText($maxNbChars = 25, $indexSize = 2),
		        'genre_ID' => $faker->numberBetween($min = 1, $max = 5),
		        'certificate_ID' => $faker->numberBetween($min = 1, $max = 3),
		        'movie_poster' => '',
		        'movie_status' => 1	]);
	    	}
    }
}
