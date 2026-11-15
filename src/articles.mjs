const source = {
  exposure:['Nikon: A Basic Look at Exposure','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/a-basic-look-at-the-basics-of-exposure'],
  aperture:['Nikon: Understanding Maximum Aperture','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/understanding-maximum-aperture'],
  shutter:['Nikon: Understanding Shutter Speed','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/understanding-shutter-speed'],
  iso:['Nikon: Understanding ISO Sensitivity','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/understanding-iso-sensitivity'],
  hist:['Nikon: Using Your Camera Histogram','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/learning-how-to-use-your-cameras-histogram'],
  focal:['Nikon: Understanding Focal Length','https://www.nikonusa.com/learn-and-explore/c/products-and-innovation/understanding-focal-length'],
  portrait:['Nikon: Portrait Photography Tips','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/quick-tips-for-taking-better-portraits'],
  light:['Nikon: Using Shadows and Light','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/using-shadows-and-light-in-your-photographs'],
  backlit:['Nikon: How to Shoot a Silhouette','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/how-to-shoot-a-silhouette'],
  focus:['Nikon: Photography Glossary','https://www.nikonusa.com/learn-and-explore/photography-glossary'],
  motion:['Nikon: Capturing or Freezing Motion','https://www.nikonusa.com/learn-and-explore/c/tips-and-techniques/capturing-or-freezing-motion-in-photos'],
  shake:['Canon: Camera-shake Blur Compensation','https://files.canon-europe.com/files/webcontent/rf-lens-world/knowledge/correction/index.html'],
  wb:['Adobe: Adjusting Image Tone and Color','https://helpx.adobe.com/be_en/lightroom-classic/desktop/process-and-develop-photos/image-tone-color.html'],
  raw:['Adobe: Understanding RAW vs. JPEG','https://helpx.adobe.com/in_hi/lightroom-cc/how-to/raw-vs-jpeg.html'],
  resize:['Adobe: Image Size, Resolution, and Resampling','https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/resize-adjust-resolution/image-size-resolution-and-resampling.html'],
  format:['Adobe: Image File Formats','https://helpx.adobe.com/ph_en/photoshop/desktop/save-and-export/export-files-to-different-formats/image-file-formats-supported-in-photoshop.html'],
  backup:['CISA: Data Backup Options','https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf'],
  perspective:['MIT: Pinhole Image Formation and Perspective','https://people.csail.mit.edu/fredo/comp-photo-book/02-fundamentals-02-pinhole-image-formation-and-linear-perspective.html']
};
export const articles = [
{
 slug:'aperture-explained', category:'Camera basics', title:'Aperture explained: what f-numbers actually change',
 description:'Understand f-stops, light, and depth of field using a simple exercise you can repeat with any adjustable lens.',
 takeaway:'A smaller f-number means a wider opening. It lets in more light and, all else equal, produces a shallower zone of acceptable sharpness.',
 body:`<h2>Read the number before choosing a look</h2><p>Aperture is the adjustable opening inside a lens. It is written as an f-number, such as f/2.8 or f/8. The numbering feels backwards at first: f/2.8 is a wider opening than f/8. How wide a particular lens opens depends on its design; a kit zoom may not offer f/1.8.</p>
<h2>Notice what happens to the background</h2><p>At the same focal length, focus distance, and sensor format, a wider aperture generally gives less depth of field. That can soften a distracting background, but it can also leave part of a face or product out of focus. A smaller aperture increases the zone that appears sharp, although very small openings can reduce fine detail through diffraction.</p>
<h2>Balance the light</h2><p>Going from f/4 to f/5.6 approximately halves the light reaching the sensor if the shutter time is unchanged. To maintain similar image brightness in the same scene, you could double the shutter time or raise ISO one stop, subject to motion and noise trade-offs. The marked f-numbers are rounded, so the calculation is approximate.</p>
<h2>Try it with a mug</h2><p>Place a mug near a window, with a second object farther behind. In aperture-priority mode, photograph from the same position at the widest available aperture, then at f/5.6 and f/8. Focus on the same part of the mug. Compare the background and the shutter speeds the camera chose. If the last photo is shaky, steady the camera or raise ISO.</p>
<h2>When to change it</h2><p>For a portrait, try a wider opening if the eyes stay sharp. For a small product with important front-to-back detail, try a smaller opening and add support or light as needed. There is no universally sharpest setting: review the subject at the final display size.</p>`, sources:[source.aperture,source.exposure]
},
{
 slug:'shutter-speed-motion', category:'Camera basics', title:'Shutter speed: freeze movement or make it visible',
 description:'Choose a starting shutter speed for still subjects, people, and motion, then diagnose the blur you see.',
 takeaway:'A faster shutter time reduces motion blur; a slower time can show movement. The right number depends on how the subject and camera move.',
 body:`<h2>Think in fractions of a second</h2><p>A shutter time of 1/500 second is shorter than 1/60 second. Shorter exposures allow less time for a moving subject or unsteady camera to draw a blur across the image. They also collect less light, so the camera may need a wider aperture, more light, or a higher ISO.</p>
<h2>Start with the subject</h2><p>For a seated person, 1/125 second may be a useful starting point; for a child moving unpredictably, try 1/500 or faster. These are starting points, not guarantees. Speed across the frame, camera distance, lens focal length, and the final display size all change the amount of visible blur.</p>
<h2>Tell camera shake from subject movement</h2><p>If the background and the person are both streaked in a similar direction, camera shake is a likely cause. If the furniture is sharp but hands are blurred, the subject probably moved. Missed focus can also look soft, so inspect the eyes and compare several frames rather than changing every setting immediately.</p>
<h2>Use slow movement intentionally</h2><p>To suggest speed, try panning: follow a cyclist moving across your view while using a slower shutter, then continue the motion as you press the button. Start around 1/30 second and experiment. Expect some attempts to fail; a sharp face with a streaked background is an outcome, not a guarantee.</p>
<h2>Practice with two frames</h2><p>Photograph someone walking at 1/60 and 1/500 second from the same position. Use shutter-priority mode, check that the camera has enough light, and review both the person and background. Stabilization can help with camera shake, but it cannot stop a subject from moving.</p>`, sources:[source.shutter,source.motion,source.shake]
},
{
 slug:'iso-and-image-noise', category:'Camera basics', title:'ISO without the myths: brightness, noise, and trade-offs',
 description:'Learn what changing ISO does in a digital workflow and why a higher setting can be a sensible choice.',
 takeaway:'Raising ISO generally makes the recorded image brighter for a given aperture and shutter time, but visible noise and highlight headroom can change.',
 body:`<h2>What ISO is useful for</h2><p>With a fixed aperture, shutter time, and scene, a higher ISO setting generally produces a brighter image. ISO is a camera setting related to how the signal is processed and recorded; changing it does not make a lens collect more light. Camera implementations differ, especially at expanded settings.</p>
<h2>Make the trade-off consciously</h2><p>If an indoor family scene needs 1/500 second to reduce movement blur, you may have to raise ISO to get a usable brightness. A little visible noise is often preferable to a completely blurred face. On the other hand, when a still subject and tripod let you use a longer exposure, a lower ISO may preserve cleaner shadows.</p>
<h2>Why dark photos can look noisy</h2><p>Shadow noise is often more obvious when an image has received little light and is brightened heavily later. ISO alone is not the whole story: the scene, actual light collected, sensor, processing, and how large you display the photo matter. Lowering ISO without allowing more light can make a photo darker rather than cleaner.</p>
<h2>Set a practical boundary</h2><p>Photograph the same indoor scene at several ISO settings while keeping the intended shutter and aperture. Compare the results at a realistic viewing size and decide what level of noise is acceptable for your camera. If you use Auto ISO, set a ceiling and minimum shutter speed if your camera offers those controls; check your manual because behavior varies.</p>
<h2>A simple decision order</h2><p>First choose the shutter time required for motion. Then choose an aperture that gives enough depth of field. Adjust ISO for the remaining brightness, and add light or support if the compromise still does not work. Expose for the detail you actually need rather than chasing the lowest number.</p>`, sources:[source.iso,source.exposure]
},
{
 slug:'exposure-compensation', category:'Camera basics', title:'Exposure compensation: when the camera makes a scene too dark or bright',
 description:'Use the plus/minus control to guide automatic exposure in bright, dark, and backlit scenes.',
 takeaway:'Exposure compensation asks an automatic exposure mode to make the result brighter or darker than its meter would otherwise choose.',
 body:`<h2>Why the meter needs a nudge</h2><p>A camera meter estimates settings from the light reflected by a scene. It cannot know whether you want a white wall to look bright or a dark room to remain moody. Large bright or dark areas can lead to an image that looks different from your intention.</p>
<h2>Use plus and minus deliberately</h2><p>In an automatic or semi-automatic mode, positive compensation usually asks for a brighter result; negative compensation asks for a darker one. Start with a modest adjustment such as +1/3 or −1/3 EV, take a frame, and review it. One full stop corresponds to a doubling or halving of light at capture when the camera achieves it through aperture or shutter time.</p>
<h2>Example: a person in front of a bright window</h2><p>If the face is too dark, add positive compensation and review the face again. The window may become lighter or lose detail. Instead, if the window is the priority, retain detail there and accept a darker face, or add light to the subject. One exposure may not preserve every tone in a very high-contrast scene.</p>
<h2>Know which setting will move</h2><p>In aperture priority the camera commonly changes shutter time; in shutter priority it commonly changes aperture, within the lens limits. Auto ISO and manual-mode behavior vary by model. If a setting reaches its limit, the camera may not achieve the requested change. Watch for warnings and check the resulting shutter speed.</p>
<h2>Reset before the next scene</h2><p>Look at the image and histogram, not just the compensation number. Intentional dark or bright areas are not automatically mistakes. When you finish, return compensation to zero or check it before your next shoot.</p>`, sources:[source.exposure,source.hist]
},
{
 slug:'how-to-read-histogram', category:'Camera basics', title:'How to read a photo histogram without chasing the perfect shape',
 description:'Use the graph to spot possible lost highlight or shadow detail and decide what matters in your scene.',
 takeaway:'A histogram shows the distribution of tones, not whether a photograph is beautiful. Its edges are most useful when important detail may be lost.',
 body:`<h2>Read left to right</h2><p>The horizontal axis runs from dark tones on the left to bright tones on the right. The height at each point indicates how much of the image falls in that tonal range. A bright white wall naturally pushes much of the graph right; a night scene may legitimately sit mostly left.</p>
<h2>Watch important edges</h2><p>Information pressed against the extreme right can indicate clipped highlights with no recoverable texture in the displayed rendering. At the extreme left, shadow detail may be lost. A small pure-white lamp or deliberate black silhouette may be acceptable; clipped detail on a wedding dress or product label may not be.</p>
<h2>Try a review loop</h2><p>Take a photo, turn on the histogram and highlight warning if available, and identify the area that matters. If a pale subject has lost detail, reduce exposure slightly and check again. If a face is too dark, brighten it or change the light, then check what happened to the background.</p>
<h2>Know what the graph represents</h2><p>In many cameras the review histogram is based on the camera's rendered preview rather than a direct display of all raw sensor data. Picture style, white balance, and other settings can influence it. RGB histograms, when available, can reveal clipping in an individual color channel that a combined graph may hide.</p>
<h2>Do not force a mountain shape</h2><p>A balanced scene may produce a broad graph, but there is no ideal profile for every photograph. Use the graph alongside the picture, the subject's brightness, and your creative goal. The best practice is to compare the graph with images you already like.</p>`, sources:[source.hist,source.exposure]
},
{
 slug:'window-light-portraits', category:'Light & color', title:'Window light portraits: a simple setup for natural-looking faces',
 description:'Use one window, a neutral background, and small changes in angle to make a flattering portrait.',
 takeaway:'Start with the subject beside a large, indirectly lit window. Turn the face gradually and observe how the shadows change.',
 body:`<h2>Find a usable window</h2><p>Choose a window with soft daylight rather than a narrow beam of direct sun across the face. Switch off strongly colored room lights if possible; mixed lighting can make skin color harder to correct. Place the subject a little way inside the room, not pressed against the glass, and leave enough space behind them for the background to soften.</p>
<h2>Turn the face toward the light</h2><p>Begin with the window roughly 45 degrees to one side of the face. Rotate the subject slowly toward and away from it, watching the eye sockets and the shadow beside the nose. Facing the window makes light more even; turning away creates deeper side shadows. Neither is automatically better—the choice depends on the mood.</p>
<h2>Control the dark side</h2><p>A white wall, sheet of paper, or foam board opposite the window can bounce some light into the shadow side. Move it closer for a stronger effect. If the portrait feels flat, move the reflector farther away or remove it. Use a stable support and avoid asking the subject to hold an uncomfortable pose.</p>
<h2>Set the camera for the person</h2><p>Focus on the nearer eye. For a still adult, try a shutter speed around 1/125 second or faster and adjust if the subject moves. Choose an aperture that keeps the features you value sharp, then use ISO or more light to support the shutter. These are starting points, not universal settings.</p>
<h2>Make three comparisons</h2><p>Photograph the same person facing the window, at an angle, and nearly side-on. Keep the camera position similar and compare the shadow shape, eye detail, and background. Ask the subject which expression and angle feel most like them.</p>`, sources:[source.light,source.portrait]
},
{
 slug:'backlit-photos', category:'Light & color', title:'How to photograph a backlit subject without losing the point of the image',
 description:'Choose between a bright subject, a detailed background, and a silhouette when light comes from behind.',
 takeaway:'Backlighting is an exposure decision: decide whether the subject, the bright background, or the outline matters most.',
 body:`<h2>Choose your priority first</h2><p>When a person stands in front of a bright window, the camera sees a much brighter background than face. If you brighten the face, the window may lose detail. If you preserve the window, the person may become dark. A single capture cannot always hold the full brightness range.</p>
<h2>For a visible face</h2><p>Move the subject toward a lighter wall or turn them slightly so some daylight reaches the face. A white reflector near the shadow side can help. In an automatic exposure mode, increase exposure compensation gradually until the face looks right, then check whether the lost background detail is acceptable. A fill flash is another option if you know how to use it.</p>
<h2>For a silhouette</h2><p>Place a recognizable outline against a bright, uncluttered background. Separate arms or other key shapes from the body so the gesture reads clearly. Expose for the bright background and let the subject fall dark; experiment with negative compensation if the camera keeps making the subject too bright.</p>
<h2>Manage flare and focus</h2><p>Bright light entering the lens can lower contrast or create flare. Shade the front of the lens with a hood or reposition yourself so the light is just outside the frame. Do not look directly at the sun through an optical viewfinder. If autofocus struggles, focus on a clear edge at the subject distance.</p>
<h2>Review both versions</h2><p>Make one frame for the subject and another for the background. Compare the two at normal viewing size. The successful version is the one that keeps the detail or silhouette needed to communicate your intention.</p>`, sources:[source.backlit,source.light]
},
{
 slug:'hard-soft-light', category:'Light & color', title:'Hard light versus soft light: read the shadow, then shape it',
 description:'Recognize light quality by its shadows and use shade, distance, and reflectors to change a photograph.',
 takeaway:'The apparent size of a light source relative to the subject influences shadow edges: a larger apparent source generally produces softer transitions.',
 body:`<h2>Look at the edge of a shadow</h2><p>Hard light often creates a clearly defined transition between light and shadow. Soft light creates a more gradual transition. A small uncovered lamp or direct midday sun can appear hard; a large overcast sky or a window covered by diffusion can appear softer.</p>
<h2>Move the subject before buying equipment</h2><p>For a portrait in direct sun, move the subject into open shade and look at where the sky light is coming from. For a tabletop object, shift it out of a direct sunbeam and nearer to a window with indirect light. Check whether the subject is still bright enough for the shutter speed you need.</p>
<h2>Use diffusion and bounce</h2><p>A translucent curtain can spread window light, depending on the material and where the sun is. A white card on the opposite side reflects a little light into shadows. Distance matters: moving a source or bounce card changes both its apparent size and the amount of light reaching the subject.</p>
<h2>Hard light is not wrong</h2><p>Defined shadows can reveal texture, create graphic shapes, or give a scene a deliberate editorial feel. The question is whether the shadow supports the subject. On a face, check whether a hard shadow cuts across an eye; on a textured object, try turning it until the surface detail becomes interesting.</p>
<h2>A useful comparison</h2><p>Photograph the same object in a direct sunbeam, in shade, and near a curtained window. Keep the camera position steady. Compare the edge of the shadow and the amount of detail, then choose the light that fits the story rather than assuming soft is always better.</p>`, sources:[source.light,source.portrait]
},
{
 slug:'white-balance-mixed-light', category:'Light & color', title:'White balance in mixed light: why one slider cannot fix everything',
 description:'Understand warm and cool light, choose a useful neutral reference, and deal with two different light sources.',
 takeaway:'White balance changes how colors are rendered. When light sources differ, a single global adjustment may not make every area neutral.',
 body:`<h2>What white balance changes</h2><p>Daylight, a household lamp, and a colored sign can illuminate a scene differently. White balance lets the camera or editor interpret those colors. A cooler-looking result contains a stronger blue direction; a warmer-looking result moves toward yellow or orange. Tint handles an additional green-to-magenta direction.</p>
<h2>Start with a consistent source</h2><p>If a portrait is lit by a window and an orange ceiling lamp, turn off the lamp when practical and compare the face again. If you cannot remove one light, choose which source should look natural and accept or locally adjust the other. Do not remove every warm or cool tone automatically; some color may be part of the atmosphere.</p>
<h2>Use a neutral reference carefully</h2><p>A neutral gray or white target under the same light as the subject can provide a useful reference. In an editor, use the white-balance selector on an area intended to be neutral and not clipped. A colorful wall or a white object illuminated by a colored lamp is not necessarily a reliable neutral target.</p>
<h2>RAW and JPEG differ</h2><p>Raw files typically offer more flexibility when changing white balance later. JPEG files have already been processed in camera, so large corrections can be more limiting. In either format, getting reasonably close at capture makes review and delivery more predictable.</p>
<h2>A quick test</h2><p>Photograph a person near a window with the indoor lights on, then off. Compare the color of the face and wall. If the mixed version still looks best, keep it; the goal is intentional color rather than a technically neutral photograph at any cost.</p>`, sources:[source.wb,source.raw]
},
{
 slug:'handheld-low-light', category:'Light & color', title:'Low-light photography without a tripod: a practical decision order',
 description:'Make sharper handheld images by balancing light, motion, aperture, stabilization, and ISO.',
 takeaway:'Protect the shutter speed your subject needs first, then use aperture, ISO, steadiness, and available light to make the exposure workable.',
 body:`<h2>Look for better light before changing numbers</h2><p>Move the subject closer to a window, under a brighter light, or toward a lighter wall if the scene allows. A small change in position can help more than repeated attempts in the darkest corner. Keep the direction of the light flattering and avoid mixing strongly different colors without a reason.</p>
<h2>Set the minimum shutter for movement</h2><p>A still object tolerates a longer exposure than an animated person. For a relaxed person, start around 1/125 second and review; for active children, a much faster speed may be needed. The focal length, stability, movement, and output size also matter. These values are starting points rather than guarantees.</p>
<h2>Open the aperture and raise ISO as needed</h2><p>Use a wider available aperture when the depth of field remains sufficient. If the subject is still too dark, raise ISO or add light. A higher-ISO photo can be useful even when it contains some noise. Do not rely on brightening a severely underexposed image later as your only strategy.</p>
<h2>Stabilize the camera, not the moving subject</h2><p>Brace your elbows, lean against a stable surface, or rest the camera securely. Lens or in-body stabilization may reduce camera shake; it cannot freeze a person walking. Shoot a short burst if your situation permits and inspect the best frame for sharp eyes and expression.</p>
<h2>When to stop compromising</h2><p>If the shutter is too slow, the aperture is already wide, and ISO is beyond your comfort level, add light, ask for a pause, or use a support for static scenes. A small change to the scene is often more effective than another menu adjustment.</p>`, sources:[source.shutter,source.iso,source.shake]
},
{
 slug:'focal-length-and-perspective', category:'Framing & focus', title:'Focal length and perspective: why stepping back changes a portrait',
 description:'Separate angle of view from perspective and understand how camera position affects the relationship between objects.',
 takeaway:'Focal length changes the field of view. Perspective changes when the camera position changes; photographers often move when they change lenses.',
 body:`<h2>Field of view is not perspective</h2><p>On the same camera, a shorter focal length includes a wider view and a longer focal length includes a narrower view. If you keep the camera in exactly the same place, a crop from the wider photograph can show roughly the same perspective as the longer view, although resolution and lens rendering differ.</p>
<h2>Why faces look different up close</h2><p>Move very close to fill the frame with a face and the nose is proportionally much closer to the camera than the ears. Step back and the relative distance difference is smaller. A longer lens can then frame the face tightly from that farther position. It is the change in viewpoint, not a magical flattening property of the lens alone, that changes perspective.</p>
<h2>Remember the camera format</h2><p>The same focal length gives a narrower angle of view on a smaller sensor than on a full-frame sensor. A crop factor is a field-of-view comparison; it does not physically change the focal length printed on the lens. Phone cameras may show equivalent focal lengths, which are useful for comparing framing but are not always the actual optical focal lengths.</p>
<h2>Try a fair comparison</h2><p>Photograph a person from a comfortable distance with a wide view. Without moving your feet, zoom in or crop the image and compare the relationships between facial features. Then move closer with the wide view to fill the frame again. The second change—the movement—is where perspective visibly changes.</p>
<h2>Choose position first</h2><p>Decide how close you want to be for communication and perspective. Then choose a focal length or crop that gives the composition you need. Leave enough space to avoid distorting important details unintentionally, especially near the edge of a very wide frame.</p>`, sources:[source.focal,source.perspective]
},
{
 slug:'negative-space-composition', category:'Framing & focus', title:'Negative space in photography: give your subject room to breathe',
 description:'Use empty areas, subject placement, and edges to create a clearer composition or room for design text.',
 takeaway:'Negative space is the area around the subject. Give it a purpose: balance, direction, context, or usable room for a headline.',
 body:`<h2>Start with a clear subject</h2><p>Before adjusting a grid, ask what the viewer should notice first. A person, product, or building becomes easier to read when its outline does not merge with unrelated objects behind it. Move a little left or right and check for a clean separation.</p>
<h2>Leave room in the intended direction</h2><p>If a person looks toward the right, space on that side can make the gaze feel open; placing them close to the edge can instead create tension. Both can be useful. For a product advertisement, leave a deliberately uncluttered region where the final copy can be placed without covering essential details.</p>
<h2>Inspect all four edges</h2><p>Distractions often enter from the corners: a partial sign, a cut-off hand, a bright patch, or a line touching the subject's head. Step back enough to include important anatomy or product edges. When a crop is intentional, make it decisive rather than leaving a tiny accidental sliver.</p>
<h2>Use the grid as a guide</h2><p>A thirds grid can help you experiment with off-center placement, but it is not a rule that every image must follow. A centered subject may be stronger for symmetry, packaging, or a direct portrait. Compare both versions and choose the one with clearer visual balance.</p>
<h2>Practice for a layout</h2><p>Photograph one object in the center, on the left, and on the right. Keep a clean area in at least one frame for a headline. Place a temporary text box over a copy of the image and check whether the subject still reads at the size it will actually be used.</p>`, sources:[source.perspective,source.focus]
},
{
 slug:'aspect-ratios-explained', category:'Framing & focus', title:'Aspect ratios explained: compose for the crop before you shoot',
 description:'Understand common frame shapes, the difference between portrait and landscape ratios, and where pixels are lost.',
 takeaway:'An aspect ratio describes shape, not resolution. Compose with the final frame in mind and leave room for later cropping.',
 body:`<h2>Read width first, then height</h2><p>A 3:2 frame has three units of width for every two of height, so it is landscape. A 4:5 frame is taller than it is wide. Two files can share a 4:5 shape while having very different pixel counts, such as 1080 × 1350 and 2160 × 2700.</p>
<h2>Understand what cropping removes</h2><p>Turning a wide image into a tall one means cutting much of the left and right edges; it does not automatically create more detail. For example, the largest centered 4:5 crop inside a 6000 × 4000 image is 3200 × 4000 pixels. It retains about 53.3% of the original pixel area.</p>
<h2>Plan multiple uses</h2><p>For a photograph needed in both a website banner and a vertical social post, make separate compositions when possible. At capture, leave extra room around hands, product edges, and text-sensitive areas. A crop can be moved left or right; a centered calculation only gives the largest possible dimensions, not the best composition.</p>
<h2>Do not confuse shape with output size</h2><p>Choose the ratio first, then decide the pixel dimensions required for the destination. Resizing to a larger pixel count interpolates new pixels; it does not restore detail removed by a crop. Keep an uncropped original or a nondestructive edit for future uses.</p>
<h2>Check before exporting</h2><p>Use our <a href="/tools/crop-calculator/">Crop Calculator</a> to estimate the maximum centered crop from your image dimensions. Then check the real image visually for cut-off details, legibility, and negative space.</p>`, sources:[source.resize,source.focus]
},
{
 slug:'depth-of-field-factors', category:'Framing & focus', title:'Depth of field: four ways to change what looks sharp',
 description:'See how aperture, distance, focal length, and viewing conditions influence the perceived zone of sharpness.',
 takeaway:'Depth of field is not controlled by aperture alone. Camera-to-subject distance and how the image is viewed matter too.',
 body:`<h2>What depth of field means</h2><p>A lens focuses precisely at one distance, but an area in front of and behind that plane can look acceptably sharp. This apparent zone is called depth of field. Its boundaries are not hard walls; what looks sharp depends partly on enlargement and viewing distance.</p>
<h2>Change aperture</h2><p>With the same camera position, subject distance, and lens, a wider aperture such as f/2.8 generally produces a shallower zone than f/8. That can simplify a portrait background, but it gives you less margin if an eye moves or a product extends toward the camera.</p>
<h2>Change distance</h2><p>Moving closer to a subject generally makes depth of field shallower, all else equal. Step back and you gain some margin, though the subject will occupy less of the frame unless you change focal length or crop. In close-up work, even a small change in camera position can affect focus.</p>
<h2>Separate subject and background</h2><p>Moving a subject farther from the background can make the background appear softer without changing the aperture. This is useful when a lens cannot open very wide or when you need a little more sharpness across the subject.</p>
<h2>Test the combination</h2><p>Place three objects in a line. Focus on the middle one and compare a wide aperture with a smaller aperture while holding position. Then keep the setting and move closer. Review at the intended output size. Focal length, sensor format, framing, and viewing conditions interact, so avoid single-number rules for every scene.</p>`, sources:[source.aperture,source.focal]
},
{
 slug:'autofocus-sharp-photos', category:'Framing & focus', title:'Why your photos are not sharp: focus, movement, or depth of field?',
 description:'Diagnose the three most common sources of softness before changing camera equipment.',
 takeaway:'First identify whether the wrong area is sharp, the whole frame is blurred, or only parts of the subject fall outside the focus zone.',
 body:`<h2>Check whether anything is sharp</h2><p>If the background is sharp but the face is not, autofocus may have locked onto the wrong distance. For a stationary subject, select a single focus point or eye detection if your camera supports it. Put the point on the important detail and confirm focus before taking the frame.</p>
<h2>Look for movement</h2><p>If fixed objects and the subject both show directional streaks, camera movement is likely. If the background is sharp but a hand is streaked, subject motion is a better explanation. Increase shutter speed for the relevant motion, brace the camera, or add light as needed.</p>
<h2>Check depth of field</h2><p>If one eye is sharp and the other is soft in a close portrait, the depth of field may be too shallow. Try a smaller aperture, step back a little, or turn the face so both eyes sit closer to the same focus plane. Refocusing alone will not increase the depth of field.</p>
<h2>Match autofocus to the subject</h2><p>Single autofocus is useful for a subject that stays still; continuous autofocus can update focus as a subject moves. Names and available tracking modes vary. For a moving child, test continuous tracking and a short burst, then check a full-size preview rather than assuming every frame is focused.</p>
<h2>Use a controlled test</h2><p>Photograph a stationary textured object in good light, using a fast enough shutter and a stable position. If it is sharp, add movement or lower the light one variable at a time. This separates a technique issue from a possible equipment problem without an unnecessary purchase.</p>`, sources:[source.focus,source.shutter,source.shake]
},
{
 slug:'window-light-product-photos', category:'Real-world shoots', title:'How to photograph a small product with one window',
 description:'Build a simple tabletop setup, control reflections, and capture useful angles without a studio.',
 takeaway:'Use a stable surface near indirect window light, then adjust the product and camera until its shape, label, and texture are clear.',
 body:`<h2>Set up a clean working surface</h2><p>Place a table near a window with indirect light. Use a plain matte sheet as a background and keep the horizon line tidy. Clean dust and fingerprints from the product using a method safe for its material. Leave space around it if the image will later carry text.</p>
<h2>Shape light with simple surfaces</h2><p>Position the window to one side so the product has both highlight and shadow. Place a white card on the opposite side to lift dark areas. Move it closer or farther away and compare. For a shiny bottle, the bright or dark shapes reflected on the surface are as important as the light on the surrounding table.</p>
<h2>Keep the label readable</h2><p>Rotate the product and adjust the camera height until important text is not distorted or obscured by glare. A slight change of angle can move a reflection off the label. If the whole product needs to be sharp, use an aperture that provides enough depth of field and support the camera if the shutter time becomes long.</p>
<h2>Make a useful set of views</h2><p>Capture a straight-on view, a three-quarter angle, a close detail, and a wider composition with negative space. Keep the camera level for a clean catalog view, then try a lower or higher angle for a campaign image. Do not claim a different product size or color: compare with the real item in neutral light.</p>
<h2>Review before dismantling</h2><p>Zoom in on the label, cap, edges, and dust. Check that highlights have not erased important texture. Save an original file and a separate edited export, and choose dimensions that fit the intended destination.</p>`, sources:[source.light,source.aperture,source.hist]
},
{
 slug:'family-photos-indoors', category:'Real-world shoots', title:'Indoor family photos: capture movement and expressions together',
 description:'Use a brighter location, a comfortable focus mode, and realistic shutter speeds for candid family moments.',
 takeaway:'Move the action toward usable light and choose a shutter speed for the people, not only for your camera shake.',
 body:`<h2>Choose a bright, uncluttered area</h2><p>Set up near a window where the family can comfortably interact. Remove a distracting chair or bright object from behind them, but keep details that give the moment meaning. Put the brighter window to the side or in front of the group if you want visible faces.</p>
<h2>Plan for the fastest person</h2><p>For people sitting quietly, try around 1/125 second and review. Children moving or laughing may need 1/500 second or faster. These are starting points: a fast hand movement can blur even when a face is still. Increase ISO or add light if the image becomes too dark.</p>
<h2>Choose enough depth of field</h2><p>A very wide aperture can make one person's eyes sharp and another person's face soft, especially if they are at different distances. Arrange the group on a similar plane or stop down when the available light permits. Focus on the most important face, and take several frames to improve the chance of an open-eyed expression.</p>
<h2>Use focus tracking where it helps</h2><p>If your camera has continuous autofocus or eye detection, test it as the children move. Watch where the focus indicator lands; it may select the wrong person. A short burst can capture a gesture, but pause to interact rather than firing continuously throughout the session.</p>
<h2>Check the photo as a whole</h2><p>Review faces at a useful magnification, but also check hands, feet, and the frame edges. Let people see a few results and adjust the setup if needed. Natural interaction is often more valuable than a technically perfect but uncomfortable pose.</p>`, sources:[source.portrait,source.motion,source.focus]
},
{
 slug:'flat-lay-photography', category:'Real-world shoots', title:'Flat-lay photography: a repeatable overhead setup',
 description:'Arrange products on a surface, control shadows, and keep an overhead camera aligned and secure.',
 takeaway:'A clean flat lay begins with a simple arrangement, a stable overhead position, and light that reveals the objects without distracting shadows.',
 body:`<h2>Start with one subject and a surface</h2><p>Choose a background that contrasts with the main object without competing with it. Add supporting objects only when they explain the subject or improve balance. Place labels in a readable direction and leave clear space for any planned headline or price.</p>
<h2>Align the camera to the surface</h2><p>Position the camera as parallel to the tabletop as practical. Use a grid or level if available and check that rectangular objects do not appear to converge unexpectedly. A secure overhead mount is useful, but do not place an unstable camera or heavy support above people or fragile items.</p>
<h2>Light from the side</h2><p>A window to one side creates shadows that reveal depth. Diffuse harsh light when needed and use a white card on the other side if shadows are too dark. Watch for reflections on glossy packaging and move the object, card, or camera angle to keep key text legible.</p>
<h2>Arrange in layers</h2><p>Place the largest object first, then add two or three supporting pieces. Vary the spacing deliberately; a small gap between objects is often easier to read than an accidental overlap. Photograph a minimal version before adding details so you have a useful alternative.</p>
<h2>Review the final crop</h2><p>Use a narrower aperture when objects sit at different heights and you need them all sharp. Check shutter speed or support the camera. Leave extra edge room for alternate aspect ratios, and make sure the final crop preserves hands, utensils, or packaging details that matter.</p>`, sources:[source.light,source.aperture,source.resize]
},
{
 slug:'photograph-buildings', category:'Real-world shoots', title:'Photographing buildings: control lines, light, and surroundings',
 description:'Improve architectural exterior photographs by selecting a viewpoint, keeping verticals controlled, and composing for the intended use.',
 takeaway:'Start with a clear viewpoint and deliberate camera height. Keep important edges straight when accuracy matters, then include enough context to explain the place.',
 body:`<h2>Walk around before raising the camera</h2><p>Look for a viewpoint that shows the entrance, roofline, and important architectural details without a tree or sign crossing them. Consider the final use: a property listing may need a clear front view, while an editorial image might benefit from a side angle and foreground.</p>
<h2>Understand converging verticals</h2><p>When you tilt a camera upward, vertical lines in a building can appear to lean together. For a more neutral rendering, keep the camera level and move farther back if space allows. A wider view may help include the roof, but check edge stretching and avoid exaggerating the building's proportions.</p>
<h2>Choose light that explains the form</h2><p>Side light can show texture and depth, while soft overcast light can make a high-contrast facade easier to record evenly. A bright sky behind a dark building may exceed the camera's range. Decide whether facade detail or sky color matters most and expose accordingly.</p>
<h2>Leave room for correction</h2><p>Photograph slightly wider than the desired final framing if you expect to straighten or correct perspective later. Corrections may crop the edges and interpolate pixels. They cannot reliably recreate architecture that was cut out of the original frame.</p>
<h2>Be truthful and considerate</h2><p>If the image is meant to represent a property, avoid edits that materially mislead viewers about its structure or surroundings. Respect access rules and people's privacy. Before leaving, capture a straight front view, an angled view, and a detail to give the final layout options.</p>`, sources:[source.perspective,source.focal,source.resize]
},
{
 slug:'phone-photography-fundamentals', category:'Real-world shoots', title:'Better phone photos: five controls that matter more than another app',
 description:'Use clean optics, light, focus, exposure, and composition to improve everyday images from a smartphone.',
 takeaway:'A clean lens, better light, a deliberate focus point, and a steady frame usually matter more than adding a filter.',
 body:`<h2>Clean and choose your lens</h2><p>Wipe the lens gently with a clean cloth suitable for optics. Fingerprints can create haze and streaks around lights. Phones may switch between several cameras or use digital cropping when you zoom; available lenses and controls vary by device.</p>
<h2>Find better light</h2><p>Move a person near a window or into open shade. Avoid placing a bright window directly behind the face unless you want a silhouette or can add light. Turn off a strongly colored room lamp if it makes skin tones look inconsistent with the window light.</p>
<h2>Tap the important detail</h2><p>Tap the subject to tell the phone where to focus or meter, then check whether a brightness slider appears. Many phones let you lock focus and exposure, but the gesture differs. Follow the device instructions and review the actual result, especially when a person moves.</p>
<h2>Steady the frame and watch the edges</h2><p>Hold the phone with both hands, lean against a stable object, or use a support for a still scene. Avoid blocking the lens. Step back a little if a close face or product looks stretched, then choose a suitable lens or crop. Keep important hands and edges inside the frame.</p>
<h2>Review processing</h2><p>Night, portrait, and HDR modes may combine frames or create simulated background blur; results can fail on movement, hair, or reflective edges. Inspect the image before the moment passes and capture a standard version too. Preserve an original file before making a heavy edit.</p>`, sources:[source.perspective,source.shake,source.focus]
},
{
 slug:'raw-vs-jpeg', category:'Edit & deliver', title:'RAW vs JPEG: which format should you photograph in?',
 description:'Compare editing flexibility, storage, speed, and delivery needs without assuming one format always wins.',
 takeaway:'RAW keeps more flexibility for interpretation; JPEG is processed in camera and usually smaller and faster to share. Choose for the job.',
 body:`<h2>What the camera saves</h2><p>A camera RAW file contains sensor data and capture information that compatible software interprets into a visible image. A JPEG has already been processed in camera and compressed. Exact RAW formats, compression choices, and bit depths vary between cameras.</p>
<h2>Choose RAW when flexibility matters</h2><p>RAW can offer more room for adjusting white balance and tones, especially in difficult light. It is useful for a product shoot with carefully controlled color or a high-contrast scene that needs considered editing. It does not guarantee recovery of detail that the sensor never recorded or fix motion blur.</p>
<h2>Choose JPEG when speed matters</h2><p>JPEG can be appropriate for a quick family event, a large set of images that look good out of camera, or a delivery workflow with limited storage. The camera's picture style and white balance are baked into its rendering, so review these settings before the event. JPEG can still be edited, but repeated heavy edits and recompression can reduce quality.</p>
<h2>Consider RAW + JPEG</h2><p>Some cameras can save both: a ready-to-share JPEG and a RAW file for selected edits. This uses more storage and can slow the buffer or transfer. Test your card capacity and workflow in advance rather than discovering the limits during an important moment.</p>
<h2>Keep the original</h2><p>Whichever format you choose, preserve the source and export copies for specific uses. Confirm that your editing software supports the camera's RAW format and version. If you use nondestructive edits, back up the catalog or sidecar files needed to reproduce those edits.</p>`, sources:[source.raw,source.backup]
},
{
 slug:'simple-photo-editing-workflow', category:'Edit & deliver', title:'A simple photo editing workflow that keeps skin and products natural',
 description:'Work from selection to final export in a deliberate order, keeping an untouched source and realistic color.',
 takeaway:'Make broad corrections first, refine local details second, and compare your edit with the original at the final viewing size.',
 body:`<h2>Choose the strongest frame before editing</h2><p>Select for expression, focus, composition, and useful detail. A well-timed image with minor exposure issues may be easier to use than a heavily blurred image with perfect color. Keep the source file intact and make edits nondestructively or on a duplicate.</p>
<h2>Correct the big decisions</h2><p>Level and crop with the destination in mind. Adjust overall brightness and white balance, then inspect highlights and shadows. If a white product has lost all surface detail, pulling down highlights may help only if information was recorded. Avoid pushing dark areas so far that noise and unnatural contrast dominate.</p>
<h2>Refine color with a reference</h2><p>Compare skin with the person in believable light or compare a product with the real object under a neutral source. Mixed lighting and display settings affect perception. Correct an obvious cast, but avoid making every warm shadow gray or increasing saturation until packaging no longer resembles the item.</p>
<h2>Work locally and lightly</h2><p>Use a local adjustment where one area needs it instead of changing the whole picture. Remove distracting temporary dust if appropriate; do not alter permanent features or product claims in a misleading way. For portraits, agree on the intended retouching and preserve natural facial details.</p>
<h2>Export for a purpose</h2><p>Resize a copy for the destination, apply output sharpening if needed, and inspect it at actual viewing size. Compare with the original after a short break. Keep the original, the editable work, and a clearly named export so you can revise the image later.</p>`, sources:[source.wb,source.raw,source.resize]
},
{
 slug:'pixels-ppi-print-size', category:'Edit & deliver', title:'Pixels, PPI, and print size: calculate what your image can deliver',
 description:'Understand the difference between screen dimensions and print density, with a worked 300 PPI example.',
 takeaway:'For print, size in inches equals pixel dimensions divided by PPI. Changing PPI alone does not add image detail.',
 body:`<h2>Start with the actual pixels</h2><p>A file measuring 3000 × 2400 pixels has the same pixel dimensions whether its metadata says 72 or 300 PPI. For screens, the pixel dimensions and display layout are usually more relevant than the PPI value stored in the file.</p>
<h2>Calculate a print size</h2><p>Divide each pixel dimension by the target pixels per inch. At 300 PPI, a 3000 × 2400 file maps to 10 × 8 inches without resampling. At 150 PPI, those same pixels map to 20 × 16 inches. The lower-density print may still be suitable depending on viewing distance, paper, and the printer's requirements.</p>
<h2>What resampling does</h2><p>With resampling off, changing print size or PPI changes how the existing pixels are allocated; no pixel data is added. With resampling on, software adds or removes pixels. Upsampling can make a file meet a required dimension, but it cannot restore genuine detail absent from the original.</p>
<h2>Account for the crop</h2><p>A 3:2 original does not match an 8:10 print without cropping or borders. Decide whether to trim the image or add margins before calculating the final dimensions. Use the remaining pixel width and height after the crop, not the dimensions of the original file.</p>
<h2>Ask the printer</h2><p>Different print processes and viewing distances have different requirements. Check the printer's requested size, color profile, file format, and whether they prefer to perform the final resizing. Inspect a proof where possible. For shape planning, use the <a href="/tools/crop-calculator/">Crop Calculator</a>.</p>`, sources:[source.resize,source.format]
},
{
 slug:'jpeg-png-webp-export', category:'Edit & deliver', title:'JPEG, PNG, or WebP? Choose the right image export',
 description:'Choose an output format for photographs, transparency, and web use while retaining a suitable master.',
 takeaway:'JPEG is commonly useful for photos, PNG supports lossless transparency, and WebP can use lossy or lossless compression. Test the actual destination.',
 body:`<h2>JPEG for many photographs</h2><p>JPEG uses lossy compression and is widely supported. It can keep photographic files relatively small, but high compression can create artifacts around edges and fine details. JPEG does not support transparency. Export from an original or master rather than repeatedly saving over an already compressed JPEG.</p>
<h2>PNG when transparency or exact edges matter</h2><p>PNG uses lossless compression and supports transparency, making it useful for cutout graphics, logos, and images with sharp edges. A large photographic PNG can be much larger than a visually similar JPEG. Lossless describes the compression of the exported pixels; it does not recover detail previously lost.</p>
<h2>WebP for compatible web workflows</h2><p>WebP supports lossy and lossless modes and can support transparency. It can be a useful web delivery format, but compare actual quality, file size, and destination support. A recipient's editing or publishing software may have specific requirements, so confirm before delivering a single-format package.</p>
<h2>Export at the dimensions needed</h2><p>Start from the intended crop, resize a copy to the requested pixel dimensions, then choose a reasonable compression level. Inspect faces, fine product text, gradients, and transparent edges. A smaller file is not useful if it visibly damages the subject.</p>
<h2>Keep a reusable master</h2><p>Store the original and an editable master separately from delivery copies. Use clear names that distinguish a web image, a transparent asset, and a print file. If color consistency matters, confirm the requested profile with the recipient or printer.</p>`, sources:[source.format,source.resize]
},
{
 slug:'photo-backup-workflow', category:'Edit & deliver', title:'A photo backup workflow you can actually maintain',
 description:'Protect originals and edits with multiple copies, a simple folder structure, and occasional restore tests.',
 takeaway:'A backup must be an independent copy you can restore. Keep more than one copy and test that it opens before deleting originals.',
 body:`<h2>Separate the working file from the backup</h2><p>A photo in a single folder is not backed up just because it is organized. If that drive fails or a file is deleted, the only copy may disappear. A common 3-2-1 approach keeps three copies in total, on two kinds of media, with one copy offsite.</p>
<h2>Copy before formatting a card</h2><p>After a shoot, copy the files to your working storage and a separate backup location. Open a sample of the copied files and verify the transfer before erasing or formatting the memory card. A card in your bag should not be treated as the only long-term backup.</p>
<h2>Include edits and organization</h2><p>If your editor stores adjustments in a catalog, database, or sidecar files, back those up along with the RAW originals. An exported JPEG may not contain the layers, crop choices, or metadata needed to reproduce your edit. Document where the catalog lives and how to restore it.</p>
<h2>Make the system predictable</h2><p>Use a consistent folder structure, such as year, date, and project name. Keep an additional copy away from the main location, such as a reputable cloud service or an encrypted drive stored elsewhere. Understand whether synchronization also propagates deletions; sync and independent versioned backup are not always the same.</p>
<h2>Test a restore</h2><p>Periodically recover a few photos and an edited project into a separate test folder. Open them and verify that the files and adjustments are usable. Protect offsite access with strong account security and review storage capacity before a busy shoot.</p>`, sources:[source.backup,source.raw]
}
];
for (const [i, a] of articles.entries()) {
 a.number = String(i + 1).padStart(2,'0');
 a.read = Math.max(1,Math.ceil((a.takeaway+' '+a.body.replace(/<[^>]+>/g,' ')).trim().split(/\s+/).length/180));
}
const diagrams={
 'aperture-explained':['aperture-comparison.svg','Two lens openings showing a wider f/2.8 aperture and a narrower f/8 aperture.','Relative opening diameters at the same focal length; illustration, not a lens diagram.'],
 'how-to-read-histogram':['histogram-guide.svg','A histogram with dark tones on the left, midtones in the center, and highlights on the right.','An illustrative tonal distribution. A useful histogram does not have one ideal shape.'],
 'window-light-portraits':['window-setup.svg','Top view of a window to one side of a portrait subject, a white card on the other, and a camera in front.','A simple starting arrangement. Rotate the subject and move the card to change the shadows.'],
 'negative-space-composition':['negative-space.svg','A portrait figure to the right of the frame and clear negative space on the left for text.','Plan space around the subject for a headline, context, or visual balance.'],
 'aspect-ratios-explained':['crop-example.svg','A centered vertical crop of 3200 by 4000 pixels within a 6000 by 4000 pixel landscape image.','A 4:5 crop from a 6000 × 4000 image removes parts of the left and right sides.']
};
for(const a of articles){
 const d=diagrams[a.slug];
 if(d){const figure=`<figure><img src="/assets/${d[0]}" alt="${d[1]}" loading="lazy"><figcaption>${d[2]}</figcaption></figure>`;a.body=a.body.replace('</p>',`</p>${figure}`)}
}
