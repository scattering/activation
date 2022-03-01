import "./jquery_global.js";
import "./jquery.tablesorter.js";

var ELEMENTS = { "n": 0, "H": 1, "He": 2, "Li": 3, "Be": 4, "B": 5, "C": 6, "N": 7, "O": 8, "F": 9, "Ne": 10, "Na": 11, "Mg": 12, "Al": 13, "Si": 14, "P": 15, "S": 16, "Cl": 17, "Ar": 18, "K": 19, "Ca": 20, "Sc": 21, "Ti": 22, "V": 23, "Cr": 24, "Mn": 25, "Fe": 26, "Co": 27, "Ni": 28, "Cu": 29, "Zn": 30, "Ga": 31, "Ge": 32, "As": 33, "Se": 34, "Br": 35, "Kr": 36, "Rb": 37, "Sr": 38, "Y": 39, "Zr": 40, "Nb": 41, "Mo": 42, "Tc": 43, "Ru": 44, "Rh": 45, "Pd": 46, "Ag": 47, "Cd": 48, "In": 49, "Sn": 50, "Sb": 51, "Te": 52, "I": 53, "Xe": 54, "Cs": 55, "Ba": 56, "La": 57, "Ce": 58, "Pr": 59, "Nd": 60, "Pm": 61, "Sm": 62, "Eu": 63, "Gd": 64, "Tb": 65, "Dy": 66, "Ho": 67, "Er": 68, "Tm": 69, "Yb": 70, "Lu": 71, "Hf": 72, "Ta": 73, "W": 74, "Re": 75, "Os": 76, "Ir": 77, "Pt": 78, "Au": 79, "Hg": 80, "Tl": 81, "Pb": 82, "Bi": 83, "Po": 84, "At": 85, "Rn": 86, "Fr": 87, "Ra": 88, "Ac": 89, "Th": 90, "Pa": 91, "U": 92, "Np": 93, "Pu": 94, "Am": 95, "Cm": 96, "Bk": 97, "Cf": 98, "Es": 99, "Fm": 100, "Md": 101, "No": 102, "Lr": 103, "Rf": 104, "Db": 105, "Sg": 106, "Bh": 107, "Hs": 108, "Mt": 109, "Ds": 110, "Rg": 111, "Cn": 112, "Nh": 113, "Fl": 114, "Mc": 115, "Lv": 116, "Ts": 117, "Og": 118 };
var ACTIVE_BUTTON = "activation";

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

function format_activation_value(v, cutoff) {
  return (v < cutoff ? '---' : v.toExponential(4));
}

function nice_number(v) {
  if (Math.abs(Math.round(v) - v) < 0.001) return Math.round(v);
  else return v.toFixed(1);
}

function format_mass(v) {
  if (v >= 1000.) return v.toFixed(0) + '&thinsp;g';
  else if (v >= 1.) return v.toFixed(3) + '&thinsp;g';
  else if (v >= 1e-3) return (1e3 * v).toFixed(3) + '&thinsp;mg';
  else if (v >= 1e-6) return (1e6 * v).toFixed(3) + '&thinsp;ug';
  else if (v >= 1e-9) return (1e9 * v).toFixed(3) + '&thinsp;ng';
  else return v.toExponential(4) + '&thinsp;ng';
}

function format_time(v) {
  if (v >= 365.2425 * 24) return nice_number(v / 365.2425 / 24) + ' yrs';
  else if (v >= 48 || v == 24) return nice_number(v / 24) + ' days';
  else if (v >= 2 || v == 1) return nice_number(v) + ' hrs';
  else if (v >= 2 / 60. | v == 1 / 60.) return nice_number(v * 60) + ' min';
  else return (v * 3600).toPrecision(3) + ' sec';
}

function parse_half_life(s) {
  var units = { y: 365 * 24 * 3600, d: 24 * 3600, h: 3600, m: 60, s: 1 };
  var a = s.split(" ");
  var value_str = a[0], units_str = a[1];
  return parseFloat(value_str) * units[units_str];
}

function parse_isotope(s) {
  var a = s.split("-");
  var element = a[0], isotope = a[1];
  return ELEMENTS[element] + parseInt(isotope) / 1000;
}

$.tablesorter.addParser({
  id: 'isotope',
  is: function (s) { return /^ *[A-Z][a-z]?-[0-9]+[sm+]* *$/.test(s); },
  format: function (s) { return parse_isotope(s); },
  type: 'numeric'
});
$.tablesorter.addParser({
  id: 'half-life',
  is: function (s) { return /^ *[0-9.+-eE]+ *[smhdy] *$/.test(s); },
  format: function (s) { return parse_half_life(s); },
  type: 'numeric'
});
$.tablesorter.addParser({
  id: 'float',
  is: function (s) { return /^ *[0-9.+-eE]+ *$/.test(s); },
  format: function (s) { return s == '---' ? 0. : parseFloat(s); },
  type: 'numeric'
});

function parse_url_parameters() {
  // Parse URL parameters.
  var cutoff_par = urlParams.get('cutoff');
  if (cutoff_par === 'null') CUTOFF = 0.0005;
  else CUTOFF = Number(cutoff_par);
  if (isNaN(CUTOFF)) { // IE doesn't support Number.isNaN
    show_error("<p>cutoff=" + cutoff_par + " in URL should be floating point μCi; defaulting to 0.0005.</p>");
    CUTOFF = 0.0005;
  }
  CUTOFF_Bq = CUTOFF * 37000;

  var decay_par = urlParams.get('decay');
  if (decay_par === 'null') DECAY_LEVEL = CUTOFF > 0 ? CUTOFF : 0.0005;
  else DECAY_LEVEL = Number(decay_par)
  if (isNaN(DECAY_LEVEL)) { // IE doesn't support Number.isNaN
    show_error("<p>decay=" + decay_par + " in URL should be floating point μCi; defaulting to cutoff.</p>");
    DECAY_LEVEL = CUTOFF > 0 ? CUTOFF : 0.0005;
  }

  var abundance_par = urlParams.get('abundance');
  if (abundance_par === 'null') ABUNDANCE = "IAEA";
  else ABUNDANCE = abundance_par;
  if (ABUNDANCE !== "NIST" && ABUNDANCE !== "IAEA") {
    show_error("<p>abundance=" + abundance_par + " in URL should be NIST or IAEA; defaulting to IAEA</p>");
    ABUNDANCE = "IAEA";
  }
}

function enable_forms() {
  // Enable forms; they are disabled by default so that noscript users
  // can't do anything.
  $('.container').removeClass("disabled");
  $('#id_chemical_formula').removeAttr("disabled");
  $('#id_submit_scat').removeAttr("disabled");
  $('#id_submit_act').removeAttr("disabled");
  $('a').each(function () { this.tabIndex = -1; });
  $('.help').each(function () { $(this).append("<hr>"); });
  $('input[type=text]').keydown(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      submit_query(ACTIVE_BUTTON);
    }
  });
  $('input[type=text]').focus(function (e) {
    var panel = $(this).closest('.panel')[0].id;
    if (panel == "scattering-panel") {
      ACTIVE_BUTTON = "scattering";
    } else if (panel == "activation-panel") {
      ACTIVE_BUTTON = "activation";
    }
  });

  //$("#id-activationForm").submit(submit_query);
  $("#id-activationForm").submit(function (event) { event.preventDefault(); });
  $('#id_submit_scat').click(function () { submit_query('scattering'); });
  $('#id_submit_act').click(function () { submit_query('activation'); });
}

function submit_query(target) {
  ACTIVE_BUTTON = target;
  $.ajax({
    type: "POST",
    url: "/cgi-bin/nact.py",
    data: {
      calculate: target,
      sample: $('input:text[id=id_chemical_formula]').val(),
      flux: $('input:text[id=id_flux]').val(),
      fast: $('input:text[id=id_fast_ratio]').val(),
      Cd: $('input:text[id=id_Cd_ratio]').val(),
      mass: $('input:text[id=id_mass]').val(),
      density: $('input:text[id=id_density]').val(),
      thickness: $('input:text[id=id_thickness]').val(),
      wavelength: $('input:text[id=id_wavelength]').val(),
      xray: $('input:text[id=id_xray]').val(),
      exposure: $('input:text[id=id_time_on]').val(),
      rest: [0, 1, 24, 360, $('input:text[id=id_time_off]').val()],
      decay: DECAY_LEVEL,
      //abundance: $('input:text[id=id_abundance]').val()
      abundance: ABUNDANCE
    },
    complete: function (xhr, status) {
      //console.log(status);
      if (status === "parsererror") {
        process_response({ 'success': false, 'detail': { 'JSON response': 'parse error in return value---maybe NaN or Inf?' } });
      } else if (status !== "success") {
        process_response({ 'success': false, 'detail': { 'status error': status } });
      }
    },
    //error: function (xhr, status, err) { console.log("error",error); },
    success: process_response
  });
}

function cssrule(class_name) {
  var ss = document.styleSheets;
  for (var i = 0; i < ss.length; i++) {
    var ss = document.styleSheets;
    var rules = ss[i].cssRules || ss[i].rules;
    for (var j = 0; j < rules.length; j++) {
      if (rules[j].selectorText === class_name) {
        return rules[j];
      }
    }
  }
}
function show_cutoff(state) {
  if (state) {
    cssrule('div.cutoff').style.display = 'block';
    cssrule('div.nocutoff').style.display = 'none';
  } else {
    cssrule('div.cutoff').style.display = 'none';
    cssrule('div.nocutoff').style.display = 'block';
  }
}
function activation_table(act, cutoff) {
  var data = {};
  var content = "";
  //construct headers
  data.headers = ["element", "reaction", "product", "half life", "0 hrs", "1 hr", "24 hrs", "15 days", format_time(act.rest[4])]
  data.sorters = ['isotope', 'text', 'isotope', 'half-life', 'float', 'float', 'float', 'float', 'float'];
  data.rows = []
  for (var i = 0; i < act.activity.length; i++) {
    var active = false, row = act.activity[i];
    var columns = [row.isotope, row.reaction, row.product, row.halflife];
    for (var j = 0; j < row.levels.length; j++) {
      active = active || (row.levels[j] >= cutoff);
      columns.push(row.levels[j])
    }
    if (active) data.rows.push(columns);
  }

  var activity_header, activity_button;
  if (cutoff > 0) {
    activity_header = 'Activity (&mu;Ci) above ' + cutoff.toExponential(4) + ' &mu;Ci';
    activity_button = '<button class="activity_button no-print" onClick="show_cutoff(false);event.stopPropagation();">All</button>';
  } else if (CUTOFF > 0) {
    activity_header = 'Activity (&mu;Ci)';
    activity_button = '<button class="activity_button no-print" onClick="show_cutoff(true);event.stopPropagation();">&gt;' + CUTOFF.toExponential(4) + '&thinsp;&mu;Ci</button>';
  } else {
    activity_header = 'Activity (&mu;Ci)';
    activity_button = '';
  }
  //add headers to table
  content += '<table border=1 class="tablesorter">\n <thead>\n';
  content += '  <tr class="header {sorter:false}"><th colspan="4" /><th colspan="5" class="{sorter:false}">' + activity_header + activity_button + '</th></tr>\n';
  content += '  <tr class="header">';
  for (var i in data.headers) {
    content += '<th class="headerSortable {sorter: \'' + data.sorters[i] + '\')">' + data.headers[i] + '</th>';
  }
  content += '</tr>\n </thead>\n <tbody>\n'
  for (var i in data.rows) {
    content += '  <tr id="' + i + '">';
    for (var j = 0; j < data.rows[i].length; j++) {
      if (j >= 4) {
        content += '<td>' + format_activation_value(data.rows[i][j], cutoff) + '</td>';
      } else {
        content += '<td>' + data.rows[i][j] + '</td>';
      }
    }
    content += '</tr>\n';
  }
  content += ' </tbody>\n <tfoot>\n  <tr class="header"><th colspan="4">total activity</th>';
  for (var j = 0; j < act.total.length; j++) {
    content += '<td>' + format_activation_value(act.total[j], cutoff) + '</td>';
  }
  content += '</tr>\n </tfoot>\n </table>\n';
  return content;
}
function show_error(error_html) {
  var content = '<div class="result error"><hr />\n';
  content += error_html;
  content += '</div>\n';
  $(content).prependTo('div[id=results]');
}
function process_response(ldata) {
  //console.log(ldata);
  if (typeof (ldata) === "string") ldata = $.parseJSON(ldata);
  if (!ldata.success) {
    var error_html = '';
    var keys = Object.keys(ldata.detail);
    keys.sort();
    for (i = keys.length - 1; i >= 0; i--) {
      error_html += '<pre class="error">Error ' + keys[i] + ': ' + ldata.detail[keys[i]] + '</pre>\n';
    }
    show_error(error_html);
    return;
  }

  var act = ldata.activation;
  var sample = ldata.sample;
  var scat = ldata.scattering;
  var xscat = ldata.xray_scattering;
  var content = '<div class="result"><hr>\n';

  if (typeof act == 'undefined') {
    // do nothing if not returned
  } else if ("error" in act) {
    // Restricted title
    content += '<p>activation calculation failed with</p><pre>\n' + act.error + '</pre>\n';
  } else {
    // Full title
    content += '<h3>Activation of ' + sample.name + ' after ' + format_time(act.exposure) + ' at ' + act.flux.toPrecision(3) + ' n/cm<sup>2</sup>/s</h3>\n';

    // Disclaimer
    content += '<p class="disclaimer">Estimated activation only. All samples must be evaluated by NIST Health Physics to determine if and how the sample can be removed from the NCNR.</p>';

    // Atoms
    content += '<p>Sample in beam: ' + format_mass(sample.mass) + ' of ' + sample.formula + '\n';

    // Rabbit parameters
    if (act.Cd > 0 || act.fast > 0) {
      content += '<br>Rabbit system: Cd ratio = ' + act.Cd + ', thermal/fast ratio = ' + act.fast + '\n'
    }

    // Decay time
    if (act.decay_time > 0) {
      content += '<br>Time to decay below ' + act.decay_level.toExponential(4) + ' &mu;Ci is ' + format_time(act.decay_time) + '.\n';
    }
    content += '</p>\n'

    // Activation table
    if (CUTOFF == 0.) {
      content += activation_table(act, 0.);
    } else {
      content += '<div class="cutoff">\n' + activation_table(act, CUTOFF) + '</div>\n';
      content += '<div class="nocutoff">\n' + activation_table(act, 0.) + '</div>\n';
    }
  }


  if (typeof scat == 'undefined') {
    // do nothing if not returned
  } else if ("error" in scat) {
    content += '<p>neutron scattering calculation failed with</p><pre>\n' + scat.error + '</pre>\n';
  } else if ("error" in xscat) {
    content += '<p>X-ray scattering calculation failed with</p><pre>\n' + xscat.error + '</pre>\n';
  } else {
    // Drop coherent cross section from penetration depth calculation.
    // An alternative formulation, based on total scattering b, would be
    // penetration = 1/(1/scat.penetration - scat.xs.coh), which perhaps
    // takes diffuse coherent scattering into account [Glinka 2011].
    var penetration = 1 / (scat.xs.abs + scat.xs.incoh);
    var transmission = 100 * Math.exp(-sample.thickness / penetration);
    var flux_str = $('input:text[id=id_flux]').val();
    var transmitted_flux = parseFloat(flux_str) * transmission / 100.0;

    // Mass density
    var density_str = $('input:text[id=id_density]').val();
    content += "<h3>Scattering from " + sample.name + "</h3>";

    // Source neutrons
    content += "<p>Source neutrons: "
      + scat.neutron.wavelength.toFixed(3) + "&thinsp;&Aring;"
      + " = " + scat.neutron.energy.toFixed(2) + "&thinsp;meV"
      + " = " + scat.neutron.velocity.toFixed(0) + "&thinsp;m/s<br>";
    content += "Source X-rays: "
      + xscat.xray.wavelength.toFixed(3) + "&thinsp;&Aring;"
      + " = " + xscat.xray.energy.toFixed(3) + "&thinsp;keV<br>";
    // Atoms
    content += "Sample in beam: " + sample.formula + " at " + sample.density.toFixed(2) + "&thinsp;g/cm<sup>3</sup>";
    if (density_str.indexOf(':') !== -1) content += " from lattice " + density_str;
    content += "</p>";

    // Neutron scattering
    content += '<table border=1>\n <tr>';
    content += '<th colspan="2">1/e penetration depth<br />(cm)</th>';
    content += '<th colspan="2">Scattering length density<br />(10<sup>-6</sup>/&Aring;<sup>2</sup>)</th>';
    content += '<th colspan="2">Scattering cross section<br />(1/cm)</th>';
    content += '<th colspan="2">X-ray SLD<br />(10<sup>-6</sup>/&Aring;<sup>2</sup>)</th>';
    content += '</tr>\n <tr>';
    content += '<th>abs</th><td>' + (1 / scat.xs.abs).toFixed(3) + '</td>';
    content += "<th>real</th><td>" + scat.sld.real.toFixed(3) + '</td>';
    content += '<th>coh</th><td>' + scat.xs.coh.toFixed(3) + '</td>';
    content += "<th>real</th><td>" + xscat.sld.real.toFixed(3) + '</td>';
    content += '</tr>\n <tr>';
    content += '<th>abs+incoh</th><td>' + (1 / (scat.xs.incoh + scat.xs.abs)).toFixed(3) + '</td>';
    content += "<th>imag</th><td>" + (-scat.sld.imag).toFixed(3) + '</td>';
    content += '<th>abs</th><td>' + scat.xs.abs.toFixed(3) + '</td>';
    content += "<th>imag</th><td>" + (-xscat.sld.imag).toFixed(3) + '</td>';
    content += '</tr>\n <tr>';
    content += '<th>abs+incoh+coh</th><td>' + scat.penetration.toFixed(3) + '</td>';
    content += '<th>incoh</th><td>' + scat.sld.incoh.toFixed(3) + '</td>';
    content += '<th>incoh</th><td>' + scat.xs.incoh.toFixed(3) + '</td>';
    content += '<th></th><td>' + '' + '</td>';
    content += '</tr>\n <tr>';
    content += '</tr>\n</table>';

    // Neutron transmission
    content += '<p>Neutron transmission is '
      + (transmission >= 2 || transmitted_flux < CUTOFF_Bq
        ? transmission.toFixed(2)
        : transmission.toPrecision(3))
      + '% for ' + sample.thickness + '&thinsp;cm of sample'
      + ' (after absorption and incoherent scattering).\n';
    content += '<br>Transmitted flux is '
      + transmitted_flux.toPrecision(4) + '&thinsp;n/cm<sup>2</sup>/s'
      + ' for a ' + flux_str + '&thinsp;n/cm<sup>2</sup>/s beam.\n';

    // Contrast match
    if (scat.contrast_match.D2O_fraction === null) {
      content += "</p>";
    } else {
      content += '<br>Contrast match point: ';
      if (scat.contrast_match.D2O_fraction < 0) {
        content += '&lt; 0% D<sub>2</sub>O</p>\n';
      } else if (scat.contrast_match.D2O_fraction > 1) {
        content += '&gt; 100% D<sub>2</sub>O</p>\n';
      } else {
        console.log(scat.sld, scat);
        content += (scat.contrast_match.D2O_fraction * 100).toFixed(1)
          + '% D<sub>2</sub>O by volume (real SLD = '
          + scat.contrast_match.sld.toFixed(3)
          + '&times;10<sup>-6</sup>/&Aring;<sup>2</sup>)</p>\n';
      }
    }
  }


  // End of div
  content += '</div>\n';

  $(content).prependTo('div[id=results]'); //add to the dom
  $("table").tablesorter({ sortList: [[8, 1]] });
}

// Dynamic help support.  Clicking an input field jumps to the
// corresponding section of the help.  Input "gork" uses:
//    <input id="id_gork" ...>
// and the corresponding help section uses:
//    <div class="help" id="help_gork"><h3>Gork Section Title</h3>...</div>
function help_jump(section_name) {
  var section = document.getElementById(section_name);
  var frame = document.getElementById('help-frame');
  if (!!section) {
    frame.scrollTop = section.offsetTop - frame.offsetTop;
  }
}

function setup_help() {
  $('#help-frame').height($('#activation-frame').height());
  $('input').focusin(function () { help_jump("help_" + this.id.slice(3)) });
  $('.cite').click(function (event) {
    event.preventDefault();
    help_jump(this.getAttribute('href').substring(1))
  });
}

$(document).ready(function () {
  parse_url_parameters();
  enable_forms();
  setup_help();
})