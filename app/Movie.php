<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Movie extends Model
{
    public $primaryKey = 'movie_ID';

    public function genre()
    {
    	return $this->belongsTo(Genre::class);
    }

    public function certificate()
    {
    	return $this->belongsTo(Certificate::class);
    }

    public function producers()
    {
        return $this->belongsToMany(Producer::class, 'movie_producer', 'movie_ID', 'producer_ID');
    }

    public function actors()
    {
        return $this->belongsToMany(Actor::class, 'movie_actor_role', 'movie_ID', 'actor_ID');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'movie_actor_role');
    }

    protected $fillable = ['movie_title','movie_story','movie_release_date','movie_film_duration','movie_additional_info', 'genre_ID', 'certificate_ID', 'movie_poster', 'movie_status'];
    use softDeletes;
}
