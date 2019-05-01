/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project TinyHana.io
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Physics2D);
ut.importModule(ut.Particles);
ut.importModule(ut.Interpolation);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Core2D);
ut.main = function() {
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.CamMovementJS.update = new game.CamMovement()._MakeSystemFn();
    ut.TimeJS.update = new ut.Time()._MakeSystemFn();
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(game.CamMovementJS);
    scheduler.schedule(ut.TimeJS);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1280;
    c0.height = 1080;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainGroup");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
