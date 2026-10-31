// Add projects here. Each image has a file, alt text, and caption.
window.portfolio = {
  "name": "Aaron Caballero Rojas",
  "email": "aaroncaballero0927@gmail.com",
  "projects": [
    {
      "id": "frl",
      "number": "01",
      "category": "Propulsion · Florida Rocket Lab",
      "title": "Liquid bi-propellant engine design.",
      "subtitle": "Liquid bi-propellant rocket engine design",
      "date": "September–October 2026",
      "tags": [
        "SolidWorks",
        "Excel",
        "C++"
      ],
      "description": "An independently completed preliminary design for a pressure-fed LOX/IPA engine, connecting sizing, feed systems, injector design, ignition, nozzle analysis, bolted-joint calculations, and preliminary heat-transfer analysis.",
      "bullets": [
        "Sized chamber and nozzle geometry for a 1,000 lbf thrust target and a 5 s burn.",
        "Drafted the feed-system P&ID and estimated component pressure losses.",
        "Designed a six-element coaxial swirl injector, manifolds, distribution plates, and a central GOX/IPA augmented spark igniter in SolidWorks.",
        "Performed preliminary chamber heat-transfer analysis and incorporated injector-face film cooling; sized seals using Parker’s O-ring Handbook, calculated bolt and joint loads in Excel, obtained supplier quotes, and assembled a bill of materials."
      ],
      "outcome": "Produced a preliminary engine design and a numerical comparison of axisymmetric MOC, conical, and Rao-style bell nozzle contours.",
      "scope": "Preliminary design for a 1,000 lbf thrust target and a 5 s burn. These are design requirements, not measured engine performance.",
      "images": [
        {
          "file": "engine.png",
          "alt": "SolidWorks bi-propellant engine assembly with chamber, nozzle, injector flange, and fasteners.",
          "caption": "SolidWorks engine assembly. Independently designed and modeled by Aaron; preliminary design, not a hot-fire test article."
        }
      ]
    },
    {
      "id": "solar",
      "category": "Thermal analysis · Independent project",
      "title": "Solar cell thermal analysis.",
      "subtitle": "SolidWorks, ANSYS & MATLAB workflow",
      "date": "November 2025",
      "tags": [
        "SolidWorks",
        "ANSYS Mechanical",
        "MATLAB"
      ],
      "description": "An exploratory study of solar-cell temperature under prescribed irradiance levels, connecting CAD, steady-state thermal simulation, and MATLAB post-processing.",
      "bullets": [
        "Modeled a solar cell and a 72-cell panel in SolidWorks.",
        "Used the single-cell model for exploratory ANSYS steady-state thermal analysis within available mesh limits.",
        "Generated ANSYS APDL input files for ten prescribed irradiance levels using MATLAB.",
        "Exported temperature and heat-flux results for plotting and energy-balance analysis in MATLAB."
      ],
      "outcome": "Established a workflow for varying irradiance inputs and comparing simulated temperature and heat-flux results.",
      "scope": "The 72-cell panel is a CAD model; the exploratory thermal analysis used a single-cell model. The contour images show model results, not measured panel performance or a verified electrical-efficiency threshold.",
      "images": [
        {
          "file": "solar-cad.png",
          "alt": "SolidWorks CAD model of a framed 72-cell solar panel.",
          "caption": "72-cell panel CAD model created in SolidWorks. The thermal study used a single-cell model within mesh limits."
        },
        {
          "file": "solar-cell-temperature.png",
          "alt": "ANSYS selected-surface temperature result, 22.715 to 39.398 degrees Celsius.",
          "caption": "ANSYS selected-surface temperature result: 22.715–39.398 °C in the displayed case."
        },
        {
          "file": "solar-temperature.png",
          "alt": "ANSYS modeled assembly temperature result, minus 23.071 to 103.77 degrees Celsius.",
          "caption": "ANSYS temperature result across the modeled assembly: −23.071–103.77 °C in the displayed case. Its plotted view and range differ from the selected-surface result."
        }
      ],
      "number": "02"
    },
    {
      "id": "uav",
      "number": "03",
      "category": "Aerodynamics · AeroGator",
      "title": "UAV tail design & airfoil analysis.",
      "subtitle": "UAV airframe design",
      "date": "September 2025–May 2026",
      "tags": [
        "XFLR5",
        "SolidWorks"
      ],
      "description": "Airframe design contributions for a terrain-mapping UAV intended for a laboratory at the University of Ghana.",
      "bullets": [
        "Compared NACA airfoils in XFLR5 and selected the symmetric NACA 0009 profile for the stabilizer design, focusing on low lift and drag near the level-flight design condition.",
        "Built SolidWorks tail geometry from airfoil coordinates and separated the assembly into horizontal and vertical stabilizers, rudder, and elevator.",
        "Contributed to the team’s terrain-mapping UAV design and researched tapered-wing and construction-material trade-offs."
      ],
      "outcome": "Contributed aerodynamic comparisons, CAD geometry, and material research to the team’s design process.",
      "images": [
        {
          "file": "tail-assembled.png",
          "alt": "Assembled UAV tail CAD model with stabilizers, rudder, and elevator.",
          "caption": "Assembled tail design in SolidWorks, showing stabilizers and control surfaces."
        },
        {
          "file": "tail-exploded.png",
          "alt": "Exploded UAV tail assembly with four separate components.",
          "caption": "Exploded tail assembly showing the stabilizers, rudder, elevator, and their interfaces."
        },
        {
          "file": "airfoil-analysis.png",
          "alt": "XFLR5 screenshot of lift coefficient, drag polar, and lift-to-drag ratio plots.",
          "caption": "XFLR5 airfoil study used to inform stabilizer selection. Supplied analysis screenshot."
        }
      ]
    },
    {
      "id": "iam3d",
      "number": "04",
      "category": "Aircraft & controls · IAM3D",
      "title": "VTOL drone & RC aircraft integration.",
      "subtitle": "Aircraft design & electronics integration",
      "date": "September 2025–May 2026",
      "tags": [
        "Autodesk Fusion",
        "Arduino",
        "RC systems"
      ],
      "description": "CAD and electronics contributions for IAM3D: a four-propeller VTOL drone base plate and an RC aircraft prototype.",
      "bullets": [
        "Designed RC-aircraft fuselage geometry and a drone base plate in Autodesk Fusion.",
        "Connected a FlySky receiver to an Arduino and contributed to motor and servo control integration."
      ],
      "outcome": "Produced component geometry and contributed to prototype control-system integration.",
      "images": [
        {
          "file": "vtol-cad.png",
          "alt": "Exploded CAD view of the four-propeller VTOL drone frame and base plate.",
          "caption": "Four-propeller VTOL drone CAD assembly. Aaron designed the base plate in Autodesk Fusion; this view shows the frame and component interfaces."
        },
        {
          "file": "vtol-prototype.jpg",
          "alt": "Four-propeller VTOL drone prototype on a workbench, showing motors, wiring, battery, and the assembled frame.",
          "caption": "Assembled four-propeller VTOL prototype, shown alongside the CAD design. Aaron’s documented contribution was base-plate CAD design; the prototype photograph shows the broader assembly."
        }
      ]
    },
    {
      "id": "leadership",
      "category": "Engineering leadership · AeroGator",
      "title": "Helping new teams take shape.",
      "subtitle": "New Member Project Chair",
      "date": "January–April 2026",
      "tags": [
        "Team leadership",
        "Aircraft design",
        "Mission analysis"
      ],
      "description": "Led two teams of new members through aircraft design and mission-feasibility analysis, supporting their design process and engineering decisions.",
      "bullets": [
        "Taught lift and drag fundamentals and SolidWorks and Fusion workflows.",
        "Guided teams in coordinating component dimensions and assembly interfaces.",
        "Taught members how to use ANSYS Fluent to analyze lift and drag of the aircraft to get a functional design.",
        "Helped translate mass, volume, payload, and endurance requirements into energy estimates and motor and battery choices."
      ],
      "outcome": "Guided two new-member teams through their aircraft design work.",
      "images": [
        {
          "file": "team-aircraft.png",
          "alt": "CAD rendering of a fixed-wing T-tail aircraft designed by one of the new-member teams Aaron led.",
          "caption": "Aircraft designed by one of the new-member teams Aaron led at AeroGator. Team design shown; Aaron’s role was project chair and technical mentor."
        }
      ],
      "number": "05"
    }
  ]
};
