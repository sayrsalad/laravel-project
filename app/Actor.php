<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Actor extends Model
{
    public $primaryKey = 'actor_ID';

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_actor_role', 'actor_ID', 'movie_ID');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'movie_actor_role');
    }

    protected $fillable = ['actor_fname','actor_lname','actor_notes','actor_img','actor_status'];
    use softDeletes;
}
