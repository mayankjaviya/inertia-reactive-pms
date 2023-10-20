<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable=[
        'title',
        'description',
        'order',
        'completed',
        'section',
        'type_id'
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
}
