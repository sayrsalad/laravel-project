<?php

use Illuminate\Database\Seeder;
use App\Role;
use Faker\Factory as faker;

class RoleTableSeeder extends Seeder
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
	        Role::create([
			'role_name' => $faker->word(),
	        'role_status' => 1 ]);
	    }
    }
}
