export class Scales {


    constructor() {

    }

    major_scales = [];

    minor_scales = [];

    major_pentatonic_scales = [];

    minor_pentatonic_scales = [];

    minor_melodic_scales = [];

    minor_harmonic_scales = [];

    minor_blues_scales = [];

    major_blues_scales = [];

    major_bebop_scales = [];

    minor_bebop_scales = [];

    ionian_scales = [];

    dorian_scales = [];

    phrygian_scales = [];

    lydian_scales = [];

    mixolydian_scales = [];

    aeolian_scales = [];

    locrian_scales = [];

     music_notes: string[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    //declare major scales
    a_major_scale = this.make_major("A",  this.music_notes);
    a_sharp_major_scale = this.make_major("A#",  this.music_notes);
    b_major_scale = this.make_major("B",  this.music_notes);
    c_major_scale = this.make_major("C",  this.music_notes);
    c_sharp_major_scale = this.make_major("C#",  this.music_notes);
    d_major_scale = this.make_major("D",  this.music_notes);
    d_sharp_major_scale = this.make_major("D#",  this.music_notes);
    e_major_scale = this.make_major("E",  this.music_notes);
    f_major_scale = this.make_major("F",  this.music_notes);
    f_sharp_major_scale = this.make_major("F#",  this.music_notes);
    g_major_scale = this.make_major("G",  this.music_notes);
    g_sharp_major_scale = this.make_major("G#",  this.music_notes);

    //declare minor scales
    a_minor_scale = this.make_minor("A",  this.music_notes);
    a_sharp_minor_scale = this.make_minor("A#",  this.music_notes);
    b_minor_scale = this.make_minor("B",  this.music_notes);
    c_minor_scale = this.make_minor("C",  this.music_notes);
    c_sharp_minor_scale = this.make_minor("C#",  this.music_notes);
    d_minor_scale = this.make_minor("D",  this.music_notes);
    d_sharp_minor_scale = this.make_minor("D#",  this.music_notes);
    e_minor_scale = this.make_minor("E",  this.music_notes);
    f_minor_scale = this.make_minor("F",  this.music_notes);
    f_sharp_minor_scale = this.make_minor("F#",  this.music_notes);
    g_minor_scale = this.make_minor("G",  this.music_notes);
    g_sharp_minor_scale = this.make_minor("G#",  this.music_notes);

    //declare major pentatonic scales
    a_major_p_scale = this.make_pentatonic_major("A",  this.music_notes);
    a_sharp_major_p_scale = this.make_pentatonic_major("A#",  this.music_notes);
    b_major_p_scale = this.make_pentatonic_major("B",  this.music_notes);
    c_major_p_scale = this.make_pentatonic_major("C",  this.music_notes);
    c_sharp_major_p_scale = this.make_pentatonic_major("C#",  this.music_notes);
    d_major_p_scale = this.make_pentatonic_major("D",  this.music_notes);
    d_sharp_major_p_scale = this.make_pentatonic_major("D#",  this.music_notes);
    e_major_p_scale = this.make_pentatonic_major("E",  this.music_notes);
    f_major_p_scale = this.make_pentatonic_major("F",  this.music_notes);
    f_sharp_major_p_scale = this.make_pentatonic_major("F#",  this.music_notes);
    g_major_p_scale = this.make_pentatonic_major("G",  this.music_notes);
    g_sharp_major_p_scale = this.make_pentatonic_major("G#",  this.music_notes);

    //declare minor pentatonic scales
    a_minor_p_scale = this.make_pentatonic_minor("A",  this.music_notes);
    a_sharp_minor_p_scale = this.make_pentatonic_minor("A#",  this.music_notes);
    b_minor_p_scale = this.make_pentatonic_minor("B",  this.music_notes);
    c_minor_p_scale = this.make_pentatonic_minor("C",  this.music_notes);
    c_sharp_minor_p_scale = this.make_pentatonic_minor("C#",  this.music_notes);
    d_minor_p_scale = this.make_pentatonic_minor("D",  this.music_notes);
    d_sharp_minor_p_scale = this.make_pentatonic_minor("D#",  this.music_notes);
    e_minor_p_scale = this.make_pentatonic_minor("E",  this.music_notes);
    f_minor_p_scale = this.make_pentatonic_minor("F",  this.music_notes);
    f_sharp_minor_p_scale = this.make_pentatonic_minor("F#",  this.music_notes);
    g_minor_p_scale = this.make_pentatonic_minor("G",  this.music_notes);
    g_sharp_minor_p_scale = this.make_pentatonic_minor("G#",  this.music_notes);

    //declare melodic minor scales
    a_minor_melodic_scale = this.make_melodic_minor("A",  this.music_notes);
    a_sharp_minor_melodic_scale = this.make_melodic_minor("A#",  this.music_notes);
    b_minor_melodic_scale = this.make_melodic_minor("B",  this.music_notes);
    c_minor_melodic_scale = this.make_melodic_minor("C",  this.music_notes);
    c_sharp_minor_melodic_scale = this.make_melodic_minor("C#",  this.music_notes);
    d_minor_melodic_scale = this.make_melodic_minor("D",  this.music_notes);
    d_sharp_minor_melodic_scale = this.make_melodic_minor("D#",  this.music_notes);
    e_minor_melodic_scale = this.make_melodic_minor("E",  this.music_notes);
    f_minor_melodic_scale = this.make_melodic_minor("F",  this.music_notes);
    f_sharp_minor_melodic_scale = this.make_melodic_minor("F#",  this.music_notes);
    g_minor_melodic_scale = this.make_melodic_minor("G",  this.music_notes);
    g_sharp_minor_melodic_scale = this.make_melodic_minor("G#",  this.music_notes);

    //declare harmonic minor scales
    a_minor_harmonic_scale = this.make_harmonic_minor("A",  this.music_notes);
    a_sharp_minor_harmonic_scale = this.make_harmonic_minor("A#",  this.music_notes);
    b_minor_harmonic_scale = this.make_harmonic_minor("B",  this.music_notes);
    c_minor_harmonic_scale = this.make_harmonic_minor("C",  this.music_notes);
    c_sharp_minor_harmonic_scale = this.make_harmonic_minor("C#",  this.music_notes);
    d_minor_harmonic_scale = this.make_harmonic_minor("D",  this.music_notes);
    d_sharp_minor_harmonic_scale = this.make_harmonic_minor("D#",  this.music_notes);
    e_minor_harmonic_scale = this.make_harmonic_minor("E",  this.music_notes);
    f_minor_harmonic_scale = this.make_harmonic_minor("F",  this.music_notes);
    f_sharp_minor_harmonic_scale = this.make_harmonic_minor("F#",  this.music_notes);
    g_minor_harmonic_scale = this.make_harmonic_minor("G",  this.music_notes);
    g_sharp_minor_harmonic_scale = this.make_harmonic_minor("G#",  this.music_notes);

    //declare  minor blues scales
    a_minor_blues_scale = this.make_minor_blues("A",  this.music_notes);
    a_sharp_minor_blues_scale = this.make_minor_blues("A#",  this.music_notes);
    b_minor_blues_scale = this.make_minor_blues("B",  this.music_notes);
    c_minor_blues_scale = this.make_minor_blues("C",  this.music_notes);
    c_sharp_minor_blues_scale = this.make_minor_blues("C#",  this.music_notes);
    d_minor_blues_scale = this.make_minor_blues("D",  this.music_notes);
    d_sharp_minor_blues_scale = this.make_minor_blues("D#",  this.music_notes);
    e_minor_blues_scale = this.make_minor_blues("E",  this.music_notes);
    f_minor_blues_scale = this.make_minor_blues("F",  this.music_notes);
    f_sharp_minor_blues_scale = this.make_minor_blues("F#",  this.music_notes);
    g_minor_blues_scale = this.make_minor_blues("G",  this.music_notes);
    g_sharp_minor_blues_scale = this.make_minor_blues("G#",  this.music_notes);

    //declare  major blues scales
    a_major_blues_scale = this.f_sharp_minor_blues_scale;
    a_sharp_major_blues_scale = this.g_minor_blues_scale;
    b_major_blues_scale = this.g_sharp_minor_blues_scale;
    c_major_blues_scale = this.a_minor_blues_scale;
    c_sharp_major_blues_scale = this.a_sharp_minor_blues_scale;
    d_major_blues_scale = this.b_minor_blues_scale;
    d_sharp_major_blues_scale = this.c_minor_blues_scale;
    e_major_blues_scale = this.c_sharp_minor_blues_scale;
    f_major_blues_scale = this.d_minor_blues_scale;
    f_sharp_major_blues_scale = this.d_sharp_minor_blues_scale;
    g_major_blues_scale = this.e_minor_blues_scale;
    g_sharp_major_blues_scale = this.f_minor_blues_scale;

    //declare  minor bebop scales
    a_minor_bebop_scale = this.make_bebop_minor("A",  this.music_notes);
    a_sharp_minor_bebop_scale = this.make_bebop_minor("A#",  this.music_notes);
    b_minor_bebop_scale = this.make_bebop_minor("B",  this.music_notes);
    c_minor_bebop_scale = this.make_bebop_minor("C",  this.music_notes);
    c_sharp_minor_bebop_scale = this.make_bebop_minor("C#",  this.music_notes);
    d_minor_bebop_scale = this.make_bebop_minor("D",  this.music_notes);
    d_sharp_minor_bebop_scale = this.make_bebop_minor("D#",  this.music_notes);
    e_minor_bebop_scale = this.make_bebop_minor("E",  this.music_notes);
    f_minor_bebop_scale = this.make_bebop_minor("F",  this.music_notes);
    f_sharp_minor_bebop_scale = this.make_bebop_minor("F#",  this.music_notes);
    g_minor_bebop_scale = this.make_bebop_minor("G",  this.music_notes);
    g_sharp_minor_bebop_scale = this.make_bebop_minor("G#",  this.music_notes);

    //declare major bebop scales
    a_major_bebop_scale = this.make_bebop_major("A",  this.music_notes);
    a_sharp_major_bebop_scale = this.make_bebop_major("A#",  this.music_notes);
    b_major_bebop_scale = this.make_bebop_major("B",  this.music_notes);
    c_major_bebop_scale = this.make_bebop_major("C",  this.music_notes);
    c_sharp_major_bebop_scale = this.make_bebop_major("C#",  this.music_notes);
    d_major_bebop_scale = this.make_bebop_major("D",  this.music_notes);
    d_sharp_major_bebop_scale = this.make_bebop_major("D#",  this.music_notes);
    e_major_bebop_scale = this.make_bebop_major("E",  this.music_notes);
    f_major_bebop_scale = this.make_bebop_major("F",  this.music_notes);
    f_sharp_major_bebop_scale = this.make_bebop_major("F#",  this.music_notes);
    g_major_bebop_scale = this.make_bebop_major("G",  this.music_notes);
    g_sharp_major_bebop_scale = this.make_bebop_major("G#",  this.music_notes);

    //declare dorian scales
    a_dorian_scale = this.make_major("G",  this.music_notes);
    a_sharp_dorian_scale = this.make_major("G#",  this.music_notes);
    b_dorian_scale = this.make_major("A",  this.music_notes);
    c_dorian_scale = this.make_major("A#",  this.music_notes);
    c_sharp_dorian_scale = this.make_major("B",  this.music_notes);
    d_dorian_scale = this.make_major("C",  this.music_notes);
    d_sharp_dorian_scale = this.make_major("C#",  this.music_notes);
    e_dorian_scale = this.make_major("D",  this.music_notes);
    f_dorian_scale = this.make_major("D#",  this.music_notes);
    f_sharp_dorian_scale = this.make_major("E",  this.music_notes);
    g_dorian_scale = this.make_major("F",  this.music_notes);
    g_sharp_dorian_scale = this.make_major("F#",  this.music_notes);

    //declare phrygian scales
    a_phrygian_scale = this.make_major("F",  this.music_notes);
    a_sharp_phrygian_scale = this.make_major("F#",  this.music_notes);
    b_phrygian_scale = this.make_major("G",  this.music_notes);
    c_phrygian_scale = this.make_major("G#",  this.music_notes);
    c_sharp_phrygian_scale = this.make_major("A",  this.music_notes);
    d_phrygian_scale = this.make_major("A#",  this.music_notes);
    d_sharp_phrygian_scale = this.make_major("B",  this.music_notes);
    e_phrygian_scale = this.make_major("C",  this.music_notes);
    f_phrygian_scale = this.make_major("C#",  this.music_notes);
    f_sharp_phrygian_scale = this.make_major("D",  this.music_notes);
    g_phrygian_scale = this.make_major("D#",  this.music_notes);
    g_sharp_phrygian_scale = this.make_major("E",  this.music_notes);

    //declare lydian scales
    a_lydian_scale = this.make_major("E",  this.music_notes);
    a_sharp_lydian_scale = this.make_major("F",  this.music_notes);
    b_lydian_scale = this.make_major("F#",  this.music_notes);
    c_lydian_scale = this.make_major("G",  this.music_notes);
    c_sharp_lydian_scale = this.make_major("G#",  this.music_notes);
    d_lydian_scale = this.make_major("A",  this.music_notes);
    d_sharp_lydian_scale = this.make_major("A#",  this.music_notes);
    e_lydian_scale = this.make_major("B",  this.music_notes);
    f_lydian_scale = this.make_major("C",  this.music_notes);
    f_sharp_lydian_scale = this.make_major("C#",  this.music_notes);
    g_lydian_scale = this.make_major("D",  this.music_notes);
    g_sharp_lydian_scale = this.make_major("D#",  this.music_notes);

    //declare mixolydian scales
    a_mixolydian_scale = this.make_major("D",  this.music_notes);
    a_sharp_mixolydian_scale = this.make_major("D#",  this.music_notes);
    b_mixolydian_scale = this.make_major("E",  this.music_notes);
    c_mixolydian_scale = this.make_major("F",  this.music_notes);
    c_sharp_mixolydian_scale = this.make_major("F#",  this.music_notes);
    d_mixolydian_scale = this.make_major("G",  this.music_notes);
    d_sharp_mixolydian_scale = this.make_major("G#",  this.music_notes);
    e_mixolydian_scale = this.make_major("A",  this.music_notes);
    f_mixolydian_scale = this.make_major("A#",  this.music_notes);
    f_sharp_mixolydian_scale = this.make_major("B",  this.music_notes);
    g_mixolydian_scale = this.make_major("C",  this.music_notes);
    g_sharp_mixolydian_scale = this.make_major("C#",  this.music_notes);

    //declare aeolian scales
    a_aeolian_scale = this.make_minor("A",  this.music_notes);
    a_sharp_aeolian_scale = this.make_minor("A#",  this.music_notes);
    b_aeolian_scale = this.make_minor("B",  this.music_notes);
    c_aeolian_scale = this.make_minor("C",  this.music_notes);
    c_sharp_aeolian_scale = this.make_minor("C#",  this.music_notes);
    d_aeolian_scale = this.make_minor("D",  this.music_notes);
    d_sharp_aeolian_scale = this.make_minor("D#",  this.music_notes);
    e_aeolian_scale = this.make_minor("E",  this.music_notes);
    f_aeolian_scale = this.make_minor("F",  this.music_notes);
    f_sharp_aeolian_scale = this.make_minor("F#",  this.music_notes);
    g_aeolian_scale = this.make_minor("G",  this.music_notes);
    g_sharp_aeolian_scale = this.make_minor("G#",  this.music_notes);

    //declare locrian scales
    a_locrian_scale = this.make_major("A#",  this.music_notes);
    a_sharp_locrian_scale = this.make_major("B",  this.music_notes);
    b_locrian_scale = this.make_major("C",  this.music_notes);
    c_locrian_scale = this.make_major("C#",  this.music_notes);
    c_sharp_locrian_scale = this.make_major("D",  this.music_notes);
    d_locrian_scale = this.make_major("D#",  this.music_notes);
    d_sharp_locrian_scale = this.make_major("E",  this.music_notes);
    e_locrian_scale = this.make_major("F",  this.music_notes);
    f_locrian_scale = this.make_major("F#",  this.music_notes);
    f_sharp_locrian_scale = this.make_major("G",  this.music_notes);
    g_locrian_scale = this.make_major("G#",  this.music_notes);
    g_sharp_locrian_scale = this.make_major("A",  this.music_notes);

    //adds scales to a list
    make_scales() {
        //push major scales into array
        this.major_scales.push(this.a_major_scale);
        this.major_scales.push(this.a_sharp_major_scale);
        this.major_scales.push(this.b_major_scale);
        this.major_scales.push(this.c_major_scale);
        this.major_scales.push(this.c_sharp_major_scale);
        this.major_scales.push(this.d_major_scale);
        this.major_scales.push(this.d_sharp_major_scale);
        this.major_scales.push(this.e_major_scale);
        this.major_scales.push(this.f_major_scale);
        this.major_scales.push(this.f_sharp_major_scale);
        this.major_scales.push(this.g_major_scale);
        this.major_scales.push(this.g_sharp_major_scale);

        //push minor scales into array
        this.minor_scales.push(this.a_minor_scale);
        this.minor_scales.push(this.a_sharp_minor_scale);
        this.minor_scales.push(this.b_minor_scale);
        this.minor_scales.push(this.c_minor_scale);
        this.minor_scales.push(this.c_sharp_minor_scale);
        this.minor_scales.push(this.d_minor_scale);
        this.minor_scales.push(this.d_sharp_minor_scale);
        this.minor_scales.push(this.e_minor_scale);
        this.minor_scales.push(this.f_minor_scale);
        this.minor_scales.push(this.f_sharp_minor_scale);
        this.minor_scales.push(this.g_minor_scale);
        this.minor_scales.push(this.g_sharp_minor_scale);

        //push major pentatonic into array
        this.major_pentatonic_scales.push(this.a_major_p_scale);
        this.major_pentatonic_scales.push(this.a_sharp_major_p_scale);
        this.major_pentatonic_scales.push(this.b_major_p_scale);
        this.major_pentatonic_scales.push(this.c_major_p_scale);
        this.major_pentatonic_scales.push(this.c_sharp_major_p_scale);
        this.major_pentatonic_scales.push(this.d_major_p_scale);
        this.major_pentatonic_scales.push(this.d_sharp_major_p_scale);
        this.major_pentatonic_scales.push(this.e_major_p_scale);
        this.major_pentatonic_scales.push(this.f_major_p_scale);
        this.major_pentatonic_scales.push(this.f_sharp_major_p_scale);
        this.major_pentatonic_scales.push(this.g_major_p_scale);
        this.major_pentatonic_scales.push(this.g_sharp_major_p_scale);

        //push minor pentatonic into array
        this.minor_pentatonic_scales.push(this.a_minor_p_scale);
        this.minor_pentatonic_scales.push(this.a_sharp_minor_p_scale);
        this.minor_pentatonic_scales.push(this.b_minor_p_scale);
        this.minor_pentatonic_scales.push(this.c_minor_p_scale);
        this.minor_pentatonic_scales.push(this.c_sharp_minor_p_scale);
        this.minor_pentatonic_scales.push(this.d_minor_p_scale);
        this.minor_pentatonic_scales.push(this.d_sharp_minor_p_scale);
        this.minor_pentatonic_scales.push(this.e_minor_p_scale);
        this.minor_pentatonic_scales.push(this.f_minor_p_scale);
        this.minor_pentatonic_scales.push(this.f_sharp_minor_p_scale);
        this.minor_pentatonic_scales.push(this.g_minor_p_scale);
        this.minor_pentatonic_scales.push(this.g_sharp_minor_p_scale);

        this.minor_melodic_scales.push(this.a_minor_melodic_scale);
        this.minor_melodic_scales.push(this.a_sharp_minor_melodic_scale);
        this.minor_melodic_scales.push(this.b_minor_melodic_scale);
        this.minor_melodic_scales.push(this.c_minor_melodic_scale);
        this.minor_melodic_scales.push(this.c_sharp_minor_melodic_scale);
        this.minor_melodic_scales.push(this.d_minor_melodic_scale);
        this.minor_melodic_scales.push(this.d_sharp_minor_melodic_scale);
        this.minor_melodic_scales.push(this.e_minor_melodic_scale);
        this.minor_melodic_scales.push(this.f_minor_melodic_scale);
        this.minor_melodic_scales.push(this.f_sharp_minor_melodic_scale);
        this.minor_melodic_scales.push(this.g_minor_melodic_scale);
        this.minor_melodic_scales.push(this.g_sharp_minor_melodic_scale);

        this.minor_harmonic_scales.push(this.a_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.a_sharp_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.b_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.c_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.c_sharp_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.d_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.d_sharp_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.e_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.f_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.f_sharp_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.g_minor_harmonic_scale);
        this.minor_harmonic_scales.push(this.g_sharp_minor_harmonic_scale);

        this.minor_blues_scales.push(this.a_minor_blues_scale);
  this.minor_blues_scales.push(this.a_sharp_minor_blues_scale);
  this.minor_blues_scales.push(this.b_minor_blues_scale);
  this.minor_blues_scales.push(this.c_minor_blues_scale);
  this.minor_blues_scales.push(this.c_sharp_minor_blues_scale);
  this.minor_blues_scales.push(this.d_minor_blues_scale);
  this.minor_blues_scales.push(this.d_sharp_minor_blues_scale);
  this.minor_blues_scales.push(this.e_minor_blues_scale);
  this.minor_blues_scales.push(this.f_minor_blues_scale);
  this.minor_blues_scales.push(this.f_sharp_minor_blues_scale);
  this.minor_blues_scales.push(this.g_minor_blues_scale);
  this.minor_blues_scales.push(this.g_sharp_minor_blues_scale);

  this.major_blues_scales.push(this.a_major_blues_scale);
  this.major_blues_scales.push(this.a_sharp_major_blues_scale);
  this.major_blues_scales.push(this.b_major_blues_scale);
  this.major_blues_scales.push(this.c_major_blues_scale);
  this.major_blues_scales.push(this.c_sharp_major_blues_scale);
  this.major_blues_scales.push(this.d_major_blues_scale);
  this.major_blues_scales.push(this.d_sharp_major_blues_scale);
  this.major_blues_scales.push(this.e_major_blues_scale);
  this.major_blues_scales.push(this.f_major_blues_scale);
  this.major_blues_scales.push(this.f_sharp_major_blues_scale);
  this.major_blues_scales.push(this.g_major_blues_scale);
  this.major_blues_scales.push(this.g_sharp_major_blues_scale);

  this.locrian_scales.push(this.a_locrian_scale);
  this.locrian_scales.push(this.a_sharp_locrian_scale);
  this.locrian_scales.push(this.b_locrian_scale);
  this.locrian_scales.push(this.c_locrian_scale);
  this.locrian_scales.push(this.c_sharp_locrian_scale);
  this.locrian_scales.push(this.d_locrian_scale);
  this.locrian_scales.push(this.d_sharp_locrian_scale);
  this.locrian_scales.push(this.e_locrian_scale);
  this.locrian_scales.push(this.f_locrian_scale);
  this.locrian_scales.push(this.f_sharp_locrian_scale);
  this.locrian_scales.push(this.g_locrian_scale);
  this.locrian_scales.push(this.g_sharp_locrian_scale);

  this.dorian_scales.push(this.a_dorian_scale);
  this.dorian_scales.push(this.a_sharp_dorian_scale);
  this.dorian_scales.push(this.b_dorian_scale);
  this.dorian_scales.push(this.c_dorian_scale);
  this.dorian_scales.push(this.c_sharp_dorian_scale);
  this.dorian_scales.push(this.d_dorian_scale);
  this.dorian_scales.push(this.d_sharp_dorian_scale);
  this.dorian_scales.push(this.e_dorian_scale);
  this.dorian_scales.push(this.f_dorian_scale);
  this.dorian_scales.push(this.f_sharp_dorian_scale);
  this.dorian_scales.push(this.g_dorian_scale);
  this.dorian_scales.push(this.g_sharp_dorian_scale);

  this.mixolydian_scales.push(this.a_mixolydian_scale);
  this.mixolydian_scales.push(this.a_sharp_mixolydian_scale);
  this.mixolydian_scales.push(this.b_mixolydian_scale);
  this.mixolydian_scales.push(this.c_mixolydian_scale);
  this.mixolydian_scales.push(this.c_sharp_mixolydian_scale);
  this.mixolydian_scales.push(this.d_mixolydian_scale);
  this.mixolydian_scales.push(this.d_sharp_mixolydian_scale);
  this.mixolydian_scales.push(this.e_mixolydian_scale);
  this.mixolydian_scales.push(this.f_mixolydian_scale);
  this.mixolydian_scales.push(this.f_sharp_mixolydian_scale);
  this.mixolydian_scales.push(this.g_mixolydian_scale);
  this.mixolydian_scales.push(this.g_sharp_mixolydian_scale);

  this.lydian_scales.push(this.a_lydian_scale);
  this.lydian_scales.push(this.a_sharp_lydian_scale);
  this.lydian_scales.push(this.b_lydian_scale);
  this.lydian_scales.push(this.c_lydian_scale);
  this.lydian_scales.push(this.c_sharp_lydian_scale);
  this.lydian_scales.push(this.d_lydian_scale);
  this.lydian_scales.push(this.d_sharp_lydian_scale);
  this.lydian_scales.push(this.e_lydian_scale);
  this.lydian_scales.push(this.f_lydian_scale);
  this.lydian_scales.push(this.f_sharp_lydian_scale);
  this.lydian_scales.push(this.g_lydian_scale);
  this.lydian_scales.push(this.g_sharp_lydian_scale);

  this.phrygian_scales.push(this.a_phrygian_scale);
  this.phrygian_scales.push(this.a_sharp_phrygian_scale);
  this.phrygian_scales.push(this.b_phrygian_scale);
  this.phrygian_scales.push(this.c_phrygian_scale);
  this.phrygian_scales.push(this.c_sharp_phrygian_scale);
  this.phrygian_scales.push(this.d_phrygian_scale);
  this.phrygian_scales.push(this.d_sharp_phrygian_scale);
  this.phrygian_scales.push(this.e_phrygian_scale);
  this.phrygian_scales.push(this.f_phrygian_scale);
  this.phrygian_scales.push(this.f_sharp_phrygian_scale);
  this.phrygian_scales.push(this.g_phrygian_scale);
  this.phrygian_scales.push(this.g_sharp_phrygian_scale);

  this.aeolian_scales.push(this.a_aeolian_scale);
  this.aeolian_scales.push(this.a_sharp_aeolian_scale);
  this.aeolian_scales.push(this.b_aeolian_scale);
  this.aeolian_scales.push(this.c_aeolian_scale);
  this.aeolian_scales.push(this.c_sharp_aeolian_scale);
  this.aeolian_scales.push(this.d_aeolian_scale);
  this.aeolian_scales.push(this.d_sharp_aeolian_scale);
  this.aeolian_scales.push(this.e_aeolian_scale);
  this.aeolian_scales.push(this.f_aeolian_scale);
  this.aeolian_scales.push(this.f_sharp_aeolian_scale);
  this.aeolian_scales.push(this.g_aeolian_scale);
  this.aeolian_scales.push(this.g_sharp_aeolian_scale);

  this.major_bebop_scales.push(this.a_major_bebop_scale);
  this.major_bebop_scales.push(this.a_sharp_major_bebop_scale);
  this.major_bebop_scales.push(this.b_major_bebop_scale);
  this.major_bebop_scales.push(this.c_major_bebop_scale);
  this.major_bebop_scales.push(this.c_sharp_major_bebop_scale);
  this.major_bebop_scales.push(this.d_major_bebop_scale);
  this.major_bebop_scales.push(this.d_sharp_major_bebop_scale);
  this.major_bebop_scales.push(this.e_major_bebop_scale);
  this.major_bebop_scales.push(this.f_major_bebop_scale);
  this.major_bebop_scales.push(this.f_sharp_major_bebop_scale);
  this.major_bebop_scales.push(this.g_major_bebop_scale);
  this.major_bebop_scales.push(this.g_sharp_major_bebop_scale);

  this.minor_bebop_scales.push(this.a_minor_bebop_scale);
  this.minor_bebop_scales.push(this.a_sharp_minor_bebop_scale);
  this.minor_bebop_scales.push(this.b_minor_bebop_scale);
  this.minor_bebop_scales.push(this.c_minor_bebop_scale);
  this.minor_bebop_scales.push(this.c_sharp_minor_bebop_scale);
  this.minor_bebop_scales.push(this.d_minor_bebop_scale);
  this.minor_bebop_scales.push(this.d_sharp_minor_bebop_scale);
  this.minor_bebop_scales.push(this.e_minor_bebop_scale);
  this.minor_bebop_scales.push(this.f_minor_bebop_scale);
  this.minor_bebop_scales.push(this.f_sharp_minor_bebop_scale);
  this.minor_bebop_scales.push(this.g_minor_bebop_scale);
  this.minor_bebop_scales.push(this.g_sharp_minor_bebop_scale);

    }

    //these  s turn one note into a scale
    make_major(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale.push(notes[i % 12]);
        return_scale.push(notes[(i + 2) % 12]);
        return_scale.push(notes[(i + 4) % 12]);
        return_scale.push(notes[(i + 5) % 12]);
        return_scale.push(notes[(i + 7) % 12]);
        return_scale.push(notes[(i + 9) % 12]);
        return_scale.push(notes[(i + 11) % 12]);
        return return_scale;

    }

    make_minor(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[1] = notes[(i + 2) % 12];
        return_scale[2] = notes[(i + 3) % 12];
        return_scale[3] = notes[(i + 5) % 12];
        return_scale[4] = notes[(i + 7) % 12];
        return_scale[5] = notes[(i + 8) % 12];
        return_scale[6] = notes[(i + 10) % 12];

        return return_scale;

    }

    make_pentatonic_major(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[1] = notes[(i + 2) % 12];
        return_scale[2] = notes[(i + 4) % 12];
        return_scale[3] = notes[(i + 7) % 12];
        return_scale[4] = notes[(i + 9) % 12];

        return return_scale;
    }

    make_pentatonic_minor(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[1] = notes[(i + 3) % 12];
        return_scale[2] = notes[(i + 5) % 12];
        return_scale[3] = notes[(i + 7) % 12];
        return_scale[4] = notes[(i + 10) % 12];

        return return_scale;

    }

    make_melodic_minor(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[1] = notes[(i + 2) % 12];
        return_scale[2] = notes[(i + 3) % 12];
        return_scale[3] = notes[(i + 5) % 12];
        return_scale[4] = notes[(i + 7) % 12];
        return_scale[5] = notes[(i + 9) % 12];
        return_scale[6] = notes[(i + 11) % 12];

        return return_scale;
    }

    make_harmonic_minor(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[1] = notes[(i + 2) % 12];
        return_scale[2] = notes[(i + 3) % 12];
        return_scale[3] = notes[(i + 5) % 12];
        return_scale[4] = notes[(i + 7) % 12];
        return_scale[5] = notes[(i + 8) % 12];
        return_scale[6] = notes[(i + 11) % 12];

        return return_scale;
    }

    make_minor_blues(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale[0] = notes[i % 12];
        return_scale[2] = notes[(i + 3) % 12];
        return_scale[3] = notes[(i + 5) % 12];
        return_scale[4] = notes[(i + 6) % 12];
        return_scale[5] = notes[(i + 7) % 12];
        return_scale[6] = notes[(i + 10) % 12];

        return return_scale;

    }

    make_bebop_major(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale.push(notes[i % 12]);
        return_scale.push(notes[(i + 2) % 12]);
        return_scale.push(notes[(i + 4) % 12]);
        return_scale.push(notes[(i + 5) % 12]);
        return_scale.push(notes[(i + 7) % 12]);
        return_scale.push(notes[(i + 8) % 12]);
        return_scale.push(notes[(i + 9) % 12]);
        return_scale.push(notes[(i + 11) % 12]);
        return return_scale;

    }

    make_bebop_minor(start_note, notes) {
        let return_scale: string[] = [];
        for (var i = 0; i < 12; i++) {
            if (notes[i] == start_note) {
                break;
            }
        }
        return_scale.push(notes[i % 12]);
        return_scale.push(notes[(i + 2) % 12]);
        return_scale.push(notes[(i + 3) % 12]);
        return_scale.push(notes[(i + 4) % 12]);
        return_scale.push(notes[(i + 5) % 12]);
        return_scale.push(notes[(i + 7) % 12]);
        return_scale.push(notes[(i + 9) % 12]);
        return_scale.push(notes[(i + 10) % 12]);

        return return_scale;

    }




}