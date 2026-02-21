Ponder.registry((event) => {
  // Void Engine!
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
      'The Void Engine',
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        // 3x3x3 engine centered at [2, 2, 2]
        // Bottom Layer: y=1, Middle: y=2, Top: y=3
        scene.text(70, "To travel between dimensions, you need to generate a stable wormhole field.", [2.5, 2.5, 2.5]);
        scene.idle(80);

        // Place Void Core in center
        scene.world.setBlock([2, 2, 2], "genesis:void_core", false);
        scene.world.showSection(util.select.position(2, 2, 2), "down");

        scene.text(60, "The Void Core acts as the singularity. It must be the center.", [2.5, 2.5, 2.5])
          .colored(PonderPalette.RED)
          .placeNearTarget();
        scene.idle(70);

        // Bottom Layer
        // 3x3 ring of frames at y=1
        for (let x = 1; x <= 3; x++) {
          for (let z = 1; z <= 3; z++) {
            scene.world.setBlock([x, 1, z], "genesis:void_engine_frame", false);
          }
        }
        scene.world.showSection(util.select.fromTo(1, 1, 1, 3, 1, 3), "up");
        scene.idle(10);

        // Middle Layer (y=2) 
        // Interface, Focus, Viewports

        // Front
        scene.world.setBlock([2, 2, 1], "genesis:void_engine_interface", false);

        // Back
        scene.world.setBlock([2, 2, 3], "genesis:void_focus", false);

        // Sides
        scene.world.setBlock([1, 2, 1], "genesis:void_engine_frame", false);
        scene.world.setBlock([3, 2, 1], "genesis:void_engine_frame", false);
        scene.world.setBlock([1, 2, 2], "genesis:void_engine_viewport", false);
        scene.world.setBlock([3, 2, 2], "genesis:void_engine_viewport", false);
        scene.world.setBlock([1, 2, 3], "genesis:void_engine_frame", false);
        scene.world.setBlock([3, 2, 3], "genesis:void_engine_frame", false);

        // Show the ring around the core
        scene.world.showSection(util.select.fromTo(1, 2, 1, 3, 2, 3).substract(util.select.position(2, 2, 2)), "down");

        scene.text(60, "The middle layer requires at least one Interface and one Focus.", [2.5, 2.5, 1.5])
          .placeNearTarget();
        scene.idle(70);

        // Top Layer
        for (let x = 1; x <= 3; x++) {
          for (let z = 1; z <= 3; z++) {
            scene.world.setBlock([x, 3, z], "genesis:void_engine_frame", false);
          }
        }
        scene.world.showSection(util.select.fromTo(1, 3, 1, 3, 3, 3), "down");

        scene.text(60, "The 3x3x3 Void Engine Frame structure acts as a cage for the Void Core.", [2.5, 3.5, 2.5])
          .placeNearTarget();
        scene.idle(70);

        // Peripherals
        scene.world.setBlock([4, 1, 1], "genesis:warpstone_catalyzer", false);
        scene.world.showSection(util.select.position(4, 1, 1), "down");

        scene.text(50, "The Warpstone Catalyzer generates power from warpstone.", [4.5, 1.5, 1.5])
          .placeNearTarget();
        scene.idle(60);

        // Place Nav Projector on top
        scene.world.setBlock([2, 4, 2], "genesis:nav_projector", false);
        scene.world.showSection(util.select.position(2, 4, 2), "down");

        scene.text(50, "The Nav Projector sets your dimension target.", [2.5, 4.5, 2.5])
          .placeNearTarget();
        scene.idle(60);

        // Final Logic
        scene.text(80, "Provide a Redstone Signal to the Interface to begin the 12-second charge.", [2.5, 2.5, 1.5])
          .colored(PonderPalette.GREEN);
        scene.idle(90);
      }
    );

  // Zero Point Labs (for porpulsion)
  event.create([
    'zpl:ion_thruster_modulator',
    'zpl:ion_thruster_exhaust',
    'zpl:mass_suspension_matrix'
  ])
    .scene(
      'zpl_propulsion_system',
      'Propulsion & Landing',
      (scene, util) => {
        scene.showBasePlate();

        // Build a small ship hull
        scene.world.setBlock([2, 1, 2], "zpl:space_plating", false);
        scene.world.showSection(util.select.position(2, 1, 2), "down");
        scene.idle(10);

        // Thrusters
        scene.text(60, "In vacuum, you move by expelling mass (Newton's 3rd Law).", [2.5, 1.5, 2.5]);
        scene.idle(70);

        // Modulator
        scene.world.setBlock([2, 2, 2], "zpl:ion_thruster_modulator", false);
        scene.world.showSection(util.select.position(2, 2, 2), "down");
        scene.text(50, "The Ion Modulator powers the engine.", [2.5, 2.5, 2.5])
          .placeNearTarget();
        scene.idle(60);

        // Exhaust (Facing South)
        scene.world.setBlock([2, 2, 3], "zpl:ion_thruster_exhaust[facing=south]", false);
        scene.world.showSection(util.select.position(2, 2, 3), "north");
        scene.text(60, "The Exhaust directs the thrust. This one pushes the ship NORTH.", [2.5, 2.5, 3.5])
          .colored(PonderPalette.BLUE)
          .placeNearTarget();
        scene.idle(70);

        scene.text(60, "You need thrusters facing ALL directions to brake and stabilize!", [2.5, 2.5, 2.5]);
        scene.idle(70);

        // Landing gear
        // Clear and show landing gear
        scene.world.hideSection(util.select.fromTo(0, 0, 0, 5, 5, 5), "up");
        scene.idle(20);

        scene.world.setBlock([2, 1, 2], "zpl:mass_suspension_matrix", false);
        scene.world.showSection(util.select.position(2, 1, 2), "down");

        scene.text(70, "The Mass Suspension Matrix acts as a kinetic dampener.", [2.5, 1.5, 2.5])
          .placeNearTarget();
        scene.idle(80);

        scene.text(60, "It prevents blocks from breaking when you slam into planetary surfaces.", [2.5, 1.5, 2.5])
          .colored(PonderPalette.GREEN);
        scene.idle(70);
      }
    );

  // Zero Point Systems (for control)
  event.create([
    'zps:octo_controller',
    'zpl:gyroscope',
    'zps:script_terminal',
    'zps:light_pipe_cable'
  ])
    .scene(
      'zps_control_network',
      'Flight Computers & Gyros',
      (scene, util) => {
        scene.showBasePlate();
        scene.idle(5);

        // The Brain
        scene.world.setBlock([2, 1, 2], "zps:octo_controller", false);
        scene.world.showSection(util.select.position(2, 1, 2), "down");
        scene.text(60, "The Octo Controller is the central flight computer.", [2.5, 1.5, 2.5])
          .placeNearTarget();
        scene.idle(70);

        // The Terminal
        scene.world.setBlock([1, 1, 2], "zps:script_terminal", false);
        scene.world.showSection(util.select.position(1, 1, 2), "down");
        scene.text(50, "The Terminal handles inputs (Keyboard/Scripting).", [1.5, 1.5, 2.5])
          .placeNearTarget();
        scene.idle(60);

        // Connectivity
        scene.world.setBlock([3, 1, 2], "zps:light_pipe_cable", false);
        scene.world.showSection(util.select.position(3, 1, 2), "down");
        scene.idle(5);

        // The Gyro
        scene.world.setBlock([4, 1, 2], "zpl:gyroscope", false);
        scene.world.showSection(util.select.position(4, 1, 2), "down");

        // Brief physics lesson
        scene.text(80, "Why do you need a Gyroscope?", [4.5, 1.5, 2.5])
          .placeNearTarget();
        scene.idle(90);

        scene.text(80, "Without it, the ship spins uncontrollably due to 'Center of Mass vs. Thrust Vector' misalignment.", [4.5, 1.5, 2.5])
          .colored(PonderPalette.RED);
        scene.idle(90);

        scene.text(80, "It is impossible to build a perfectly balanced ship. The Gyro applies counter-torque to cancel out the spin.", [4.5, 1.5, 2.5]);
        scene.idle(90);

        //  Network 
        scene.overlay.showText(80)
          .text("Connect all components (Thrusters, Gyros, Terminals) via Light Pipe Cables to the Octo Controller.")
          .placeNearTarget()
          .pointAt([2.5, 1.5, 2.5]);
        scene.idle(90);
      }
    );
});