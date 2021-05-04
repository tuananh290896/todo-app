<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateNoteRequest;
use App\Traits\ResponseTrait;
use DB;
use App\Models\Note;

class NoteController extends Controller
{
    use ResponseTrait;

    public function index(){
      $notes = Note::where('user_id', auth('api')->id())
                   ->latest()
                   ->paginate(5);
      return $this->success($notes);
    }

    public function store(CreateNoteRequest $request){
      try {
        DB::beginTransaction();
        $data = $request->getData();
        $data['user_id'] = auth('api')->id();
        $note = Note::create($data);
        DB::commit();
        return $this->success($note);
      } catch (\Exception $e) {
        DB::rollBack();
        $this->error($e->getMessage(), 401);
      }
    }

    public function destroy($id){
      try {
        DB::beginTransaction();
        $note = Note::findOrFail($id);
        $note->delete();
        DB::commit();
        return $this->success('Delete note success!');
      } catch (\Exception $e) {
        DB::rollBack();
        $this->error($e->getMessage(), 401);
      }
    }
}
