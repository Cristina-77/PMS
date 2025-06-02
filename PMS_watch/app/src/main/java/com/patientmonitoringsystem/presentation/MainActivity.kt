package com.patientmonitoringsystem.presentation

import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.widget.TextView
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import android.content.pm.PackageManager
import android.view.Gravity
import android.widget.FrameLayout

class MainActivity : AppCompatActivity() {

    private lateinit var textView: TextView

    companion object {
        private const val SENSOR_PERMISSION_CODE = 101
    }

    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        textView = TextView(this).apply {
            text = "Verificare permisiuni..."
            textSize = 18f
            gravity = Gravity.CENTER
        }

        setCenteredView(textView)

        if (checkSelfPermission(android.Manifest.permission.BODY_SENSORS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(arrayOf(android.Manifest.permission.BODY_SENSORS), SENSOR_PERMISSION_CODE)
        } else {
            startHeartRateService()
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == SENSOR_PERMISSION_CODE && grantResults.isNotEmpty() &&
            grantResults[0] == PackageManager.PERMISSION_GRANTED
        ) {
            startHeartRateService()
        } else {
            textView.text = "Permisiunea BODY_SENSORS este necesară."
        }
    }

    @RequiresApi(Build.VERSION_CODES.O)
    private fun startHeartRateService() {
        val serviceIntent = Intent(this, HeartRateService::class.java)
        startForegroundService(serviceIntent)

        textView = TextView(this).apply {
            text = "Serviciul de monitorizare a pulsului este activ"
            textSize = 18f
            gravity = Gravity.CENTER
        }

        setCenteredView(textView)
    }

    private fun setCenteredView(tv: TextView) {
        val layout = FrameLayout(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
            foregroundGravity = Gravity.CENTER
            addView(tv)
        }
        setContentView(layout)
    }
}
