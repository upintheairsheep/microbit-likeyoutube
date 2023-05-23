input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G G F E G C5 B A ", 120)
    music.playMelody("G G F - F F E D ", 120)
    music.playMelody("G G G A G E G E ", 120)
    music.playMelody("G C5 C5 C5 B A G A ", 120)
    music.playMelody("G C E D C D E E ", 120)
    music.playMelody("E D D D E G G E ", 120)
    music.playMelody("D C D E E E E D ", 120)
    music.playMelody("D E D C - - - - ", 120)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
	
})
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
	
})
