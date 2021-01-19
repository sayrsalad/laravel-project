<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Genre extends Model
{
    public $primaryKey = 'genre_ID';

    public function movies()
    {
    	return $this->hasMany(Movie::class);
    }

    protected $fillable = ['genre_name','genre_status'];
    use softDeletes;
}
