<?php

use Illuminate\Database\Seeder;
use App\Producer;
use Faker\Factory as faker;

class ProducerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach(range(1,5) as $index){
	        Producer::create([
			'producer_name' => $faker->name($gender = 'others'|'male'|'female') ,
	        'producer_email_address' => $faker->email(),
	        'producer_webiste' => $faker->freeEmailDomain(),
	        'producer_status' => 1 ]);
	    }
    }
}
