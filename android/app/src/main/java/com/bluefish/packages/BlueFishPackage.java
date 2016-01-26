package com.bluefish.packages;

import com.bluefish.modules.MediaModule;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by itse4 on 1/26/2016.
 */
public class BlueFishPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MediaModule(reactApplicationContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return null;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactApplicationContext) {
        return null;
    }
}
