<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->increments('movie_ID')->unsigned();
            $table->string('movie_title', 64);
            $table->text('movie_story', 64);
            $table->date('movie_release_date');
            $table->integer('movie_film_duration', false);
            $table->text('movie_additional_info', 64);
            $table->integer('genre_ID')->unsigned();
            $table->foreign('genre_ID')->references('genre_ID')->on('genres');
            $table->integer('certificate_ID')->unsigned();
            $table->foreign('certificate_ID')->references('certificate_ID')->on('certificates');
            $table->string('movie_poster');
            $table->enum('movie_status', array('active','inactive'));
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
        Schema::dropIfExists('movies');
    }
}
