<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieActorRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_actor_role', function (Blueprint $table) {
            $table->integer('movie_ID')->unsigned();
            $table->foreign('movie_ID')->references('movie_ID')->on('movies');
            $table->integer('actor_ID')->unsigned();
            $table->foreign('actor_ID')->references('actor_ID')->on('actors');
            $table->integer('role_ID')->unsigned();
            $table->foreign('role_ID')->references('role_ID')->on('roles');
            $table->text('character_name', 64);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_actor_role');
    }
}
