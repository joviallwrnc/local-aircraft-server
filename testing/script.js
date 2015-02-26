ges.communityAircraftMap = {};
ges.PRODUCTION = false;

$(function () {
  $('<li>').append(
    $('<a>')
      .text('My Custom Aircraft')
      .prop('href', '#')
      .mouseup(function () {
        ges.aircraft.change('aircraft');
      })
  ).appendTo($('.dropdown-menu').eq(2).empty());
});

var oldLoad = Aircraft.prototype.load;
Aircraft.prototype.load = function (aircraftName, coordinates, bJustReload) {
  oldLoad.call(this, 'aircraft', coordinates, bJustReload);
};

// disable multiplayer so anything broken won't affect the multiplayer server

ges.multiplayerHost = '0.0.0.0';
multiplayer.stopUpdates();
multiplayer.on = false;
$('input[gespref="ges.preferences.multiplayer"]').prop('disabled', true);
