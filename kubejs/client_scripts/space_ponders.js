Ponder.registry((event) => {

  // Void Engine
  event.create([
    'genesis:void_core',
    'genesis:void_engine_frame',
    'genesis:void_engine_interface',
    'genesis:void_focus',
    'genesis:void_core_reflector_panel',
    'genesis:void_engine_viewport',
    'genesis:warpstone_catalyzer',
    'genesis:nav_projector'
  ])
    .scene(
      'genesis_jump_drive_construction',
      'The Void Engine: Tearing Space-Time',
      'kubejs:void_engine_setup',
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        scene.text(70, "To jump to space, you must make a (stable) wormhole around your ship.", [2.5, 3, 2.5])
          .placeNearTarget();
        scene.idle(80);

        // Void Core
        scene.world.showSection(util.select.position(2, 2, 2), 10);
        scene.text(60, "The Void Core is like the belly button of special relativity.", [2.5, 2.5, 2.5])
          .colored(PonderPalette.RED)
          .placeNearTarget();
        scene.idle(70);

        // The Containment Field (Frames)
        scene.world.showSection(util.select.fromTo(1, 1, 1, 3, 3, 3).substract(util.select.position(2, 2, 2)), 10);
        scene.text(80, "The surrounding 3x3x3 structure acts as a cage.", [2.5, 3, 0.5])
          .placeNearTarget();
        scene.idle(90);

        // Components
        scene.text(60, "The Interface bridges the gap between Redstone signals and the engine, which was written in a coding language so old my grandma hasn't heard of it.", [2.5, 2, 1])
          .placeNearTarget();
        scene.idle(50);

        scene.text(60, "Void Focus lenses amplify the field. More focuses allow for cleaner, more efficient jumps.", [1, 2, 2.5])
          .placeNearTarget();
        scene.idle(70);

        // Power
        scene.world.hideSection(util.select.fromTo(1, 1, 1, 3, 3, 3), 10);
        scene.idle(10);

        scene.world.showSection(util.select.position(4, 1, 2), 10);
        scene.text(70, "The Warpstone Catalyzer breaks down Warpstone into FE.", [4.5, 1.5, 2.5])
          .placeNearTarget();
        scene.idle(80);

        // The Jump
        scene.world.showSection(util.select.fromTo(1, 1, 1, 3, 3, 3), 10);
        scene.world.showSection(util.select.position(2, 4, 2), 10); // Projector

        scene.text(80, "Once fueled and targeted via the Navigation Projector, a Redstone signal initiates the 12-second charge sequence.", [2.5, 4.5, 2.5])
          .colored(PonderPalette.GREEN);
        scene.idle(90);
      }
    );


  // Propulsion w/ ZPL

  event.create([
    'zpl:ion_thruster_modulator',
    'zpl:ion_thruster_exhaust',
    'zpl:mass_suspension_matrix'
  ])
    .scene(
      'zpl_propulsion_system',
      'Propulsion Physics & Landing',
      'kubejs:thruster_setup',
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        // Newtonian Physics
        scene.text(60, "In the vacuum of space, there is no air drag so you must move solely by expelling mass.", [2.5, 2.5, 2.5]);
        scene.idle(70);

        // Show Thruster Assembly
        scene.world.showSection(util.select.fromTo(2, 1, 2, 2, 1, 3), 10);
        scene.text(70, "The Ion Modulator accelerates particles, and the Exhaust directs them. I SWEAR the particles are stored somewhere in there.", [2.5, 1.5, 3.5])
          .placeNearTarget();
        scene.idle(80);

        scene.text(80, "Newton's Third Law: firing backwards pushes the ship forwards. You need thrusters facing ALL directions to brake!", [2.5, 1.5, 3.5])
          .colored(PonderPalette.BLUE);
        scene.idle(90);

        // Landing Gear Physics
        scene.world.hideSection(util.select.fromTo(0, 0, 0, 5, 5, 5), 10);
        scene.idle(20);

        scene.world.showSection(util.select.position(2, 1, 1), 10);

        scene.text(70, "Planetary landings involve high kinetic energy. Hitting the ground usually breaks blocks.", [2.5, 1.5, 1.5]);
        scene.idle(80);

        scene.text(80, "The Mass Suspension Matrix creates a dampening field, absorbing the impact force and preventing hull fracture.", [2.5, 1.5, 1.5])
          .colored(PonderPalette.GREEN)
          .placeNearTarget();
        scene.idle(90);
      }
    );


  // Controll Syetems (from ZPS)
  event.create([
    'zps:octo_controller',
    'zpl:gyroscope',
    'zps:script_terminal',
    'zps:light_pipe_cable'
  ])
    .scene(
      'zps_control_network',
      'Flight Computers & Stability',
      'kubejs:control_system',
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        scene.world.showSection(util.select.position(2, 2, 2), 10);
        scene.world.showSection(util.select.position(1, 2, 2), 10); // Terminal
        scene.world.showSection(util.select.fromTo(1, 2, 2, 2, 2, 2), 10); // Cable

        scene.text(70, "The Script Terminal sends digital inputs to the Octo Controller.", [1.5, 2.5, 2.5])
          .placeNearTarget();
        scene.idle(80);

        // The Gyroscope
        scene.world.showSection(util.select.position(4, 2, 2), 10); // Gyro
        scene.world.showSection(util.select.fromTo(2, 2, 2, 4, 2, 2), 10); // Cable

        scene.text(80, "Without the Gyroscope, your ship spins uncontrollably because of center of mass vs. thrust vector misalignment.", [4.5, 2.5, 2.5])
          .colored(PonderPalette.RED)
          .placeNearTarget();
        scene.idle(90);

        scene.text(80, "Since it is nearly impossible to build perfectly balanced ships, the Gyroscope applies 'Artificial Torque' to counter-act the spin. That's BASICALLY how they work in real life too.", [4.5, 2.5, 2.5]);
        scene.idle(90);

        // The Network
        scene.overlay.showText(80)
          .text("Light Pipes connect these components instantly. Your Octo Controller needs power too I think.")
          .placeNearTarget()
          .pointAt([2.5, 2.5, 2.5]);
        scene.idle(90);
      }
    );
});