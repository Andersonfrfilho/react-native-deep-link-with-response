package com.reactnative.andersonfrfilho.deeplinkwithresponse;
import android.app.Activity;
import android.content.Intent;
public interface ActivityEventListener extends com.facebook.react.bridge.ActivityEventListener{
    void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data);

    void onActivityResult(int requestCode, int resultCode, Intent data);

    void onNewIntent(Intent intent);
}
