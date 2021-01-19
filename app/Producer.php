<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Producer extends Model
{
    public $primaryKey = 'producer_ID';

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_producer', 'producer_ID', 'movie_ID');
    }

    protected $fillable = ['producer_name','producer_email_address','producer_webiste','producer_status'];
    use softDeletes;
}
