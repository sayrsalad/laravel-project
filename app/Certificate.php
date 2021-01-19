<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Certificate extends Model
{
    public $primaryKey = 'certificate_ID';

    public function movies()
    {
    	return $this->hasMany(Movie::class);
    }
    
    protected $fillable = ['certificate_name','certificate_status'];
    use softDeletes;
}
