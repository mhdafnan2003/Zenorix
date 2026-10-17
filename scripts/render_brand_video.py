import sys, math
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / '.video-tools'))
import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFont
root=Path(__file__).resolve().parents[1]
w,h,fps=640,720,24
font_path='C:/Windows/Fonts/arial.ttf'
bold_path='C:/Windows/Fonts/arialbd.ttf'
def font(n,b=False): return ImageFont.truetype(bold_path if b else font_path,n)
def center(draw,text,y,f,fill):
 box=draw.textbbox((0,0),text,font=f); draw.text(((w-(box[2]-box[0]))/2,y),text,font=f,fill=fill)
y,x=np.mgrid[0:h,0:w].astype(float)
writer=imageio_ffmpeg.write_frames(str(root/'public/videos/zenorix-brand.mp4'),(w,h),fps=fps,codec='libx264',pix_fmt_out='yuv420p',output_params=['-crf','23','-movflags','+faststart'])
writer.send(None)
for frame in range(192):
 t=frame/fps; phase=t*math.tau/8
 glow=np.exp(-((x-(320+170*math.sin(phase)))**2+(y-(320+160*math.cos(phase)))**2)/110000)
 arr=np.zeros((h,w,3),dtype=np.uint8)
 for c,(base,amp) in enumerate([(13,71),(7,30),(24,102)]): arr[:,:,c]=np.clip(base+amp*glow,0,255)
 im=Image.fromarray(arr); d=ImageDraw.Draw(im)
 d.text((38,36),'ZENORIX STUDIO',font=font(15),fill='#dfd1ee')
 d.text((570,32),'+',font=font(30),fill='#dfbdff')
 d.ellipse((70,120,570,620),outline='#593475',width=1)
 a=phase; px=320+250*math.cos(a); py=370+250*math.sin(a)
 d.ellipse((px-6,py-6,px+6,py+6),fill='#dfbdff')
 by=220+6*math.sin(phase)
 d.ellipse((278,by,362,by+84),fill='white')
 center(d,'Z',by+12,font(52), '#9343d7')
 center(d,'zenorix.',330,font(84,True),'#ffffff')
 words=['Design.','Build.','Deploy.']; positions=[153,274,380]
 for j,word in enumerate(words):
  active=(frame//64)==j
  d.text((positions[j],440),word,font=font(24,active),fill='white' if active else '#b39cc6')
 d.line((40,618,600,618),fill='#634479',width=1)
 d.text((40,640),'Digital solutions.\nBuilt for growth.',font=font(18),fill='#dfd1ee',spacing=5)
 d.text((470,664),'zenorix.in',font=font(19,True),fill='white')
 if frame==0: im.save(root/'public/videos/zenorix-brand-poster.jpg',quality=90)
 writer.send(np.asarray(im))
writer.close()
print('Rendered 8-second H.264 MP4.')
