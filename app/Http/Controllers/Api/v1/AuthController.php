<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Traits\ResponseTrait;
use DB;
use App\Models\User;

class AuthController extends Controller
{
    use ResponseTrait;

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(LoginRequest $request)
    {
      $data = $request->getData();
      $remember = $request->get('remember');

      if (! $token = auth()->attempt($data)) {
        return $this->error('Email or password is incorrect', 401);
      }
      
      return $this->success([
        "user" => auth('api')->user(),
        "token" => $token
      ]);
    }

    public function register(RegisterRequest $request)
    {
      $data = $request->getData();
      $data['password'] = bcrypt($data['password']);
      $user = User::create($data);
      $token = auth('api')->login($user);
      return $this->success([
        "user" => $user,
        "token" => $token
      ]);
    }

    public function me(){
      return $this->success(auth('api')->user());
    }
}
