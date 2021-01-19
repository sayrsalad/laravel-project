<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieProducerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_producer', function (Blueprint $table) {
            $table->integer('movie_ID')->unsigned();
            $table->foreign('movie_ID')->references('movie_ID')->on('movies');
            $table->integer('producer_ID')->unsigned();
            $table->foreign('producer_ID')->references('producer_ID')->on('producers');
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
        Schema::dropIfExists('movie_producer');
    }
}
