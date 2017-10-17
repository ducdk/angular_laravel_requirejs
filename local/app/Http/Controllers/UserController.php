<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;


class UserController extends Controller
{
    public function __construct(){
        //$this->middleware('auth.basic', ['only' => 'store']);
        $this->middleware('jwt.auth');
    }

    public function index(Request $request)
    {
        $user = User::orderBy('name', 'ASC')->withCount('jokes')->get(); 
        // $user = User::orderBy('name', 'ASC')->withCount('jokes')->select('id', 'name', 'email', 'created_at')->get(); 
        // return response()->json($user, 200);
        return response()->json($this->transformCollection($user), 200);
    }

    private function transformCollection($users){
        $usersArray = $users->toArray();
        return [
            'data' => array_map([$this, 'transform'], $usersArray)
        ];
    }

    private function transform($user){
        // format('l jS \\of F Y h:i:s A')
        $created_at = new Carbon($user['created_at']);
        $updated_at = new Carbon($user['updated_at']);
        return [
            'user_id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'created_at' => $created_at->format('jS \\of F Y'),
            'updated_at' => $updated_at->format('jS \\of F Y'),
            'jokes_count' => $user['jokes_count'],
        ];
    }
}
