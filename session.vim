let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
doautoall SessionLoadPre
silent only
silent tabonly
cd ~/Projects/Sketch
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess+=aoO
badd +20 release.md
badd +1 lib/cli.js
badd +24 lib/options.js
badd +50 lib/log.js
badd +59 lib/commands.js
badd +1 test
badd +35 test/commands.js
badd +0 lib/files.js
argglobal
%argdel
$argadd release.md
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit lib/cli.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
wincmd _ | wincmd |
split
2wincmd k
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 124 + 124) / 248)
exe '2resize ' . ((&lines * 20 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 123 + 124) / 248)
exe '3resize ' . ((&lines * 18 + 30) / 61)
exe 'vert 3resize ' . ((&columns * 123 + 124) / 248)
exe '4resize ' . ((&lines * 18 + 30) / 61)
exe 'vert 4resize ' . ((&columns * 123 + 124) / 248)
argglobal
balt release.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 16 - ((15 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 16
normal! 04|
wincmd w
argglobal
enew | setl bt=help
help :mksession@en
balt lib/commands.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal nofoldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 805 - ((9 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 805
normal! 064|
wincmd w
argglobal
if bufexists(fnamemodify("lib/commands.js", ":p")) | buffer lib/commands.js | else | edit lib/commands.js | endif
if &buftype ==# 'terminal'
  silent file lib/commands.js
endif
balt lib/options.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 49 - ((17 * winheight(0) + 9) / 18)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 49
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("release.md", ":p")) | buffer release.md | else | edit release.md | endif
if &buftype ==# 'terminal'
  silent file release.md
endif
balt lib/cli.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 24 - ((15 * winheight(0) + 9) / 18)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 24
normal! 010|
wincmd w
exe 'vert 1resize ' . ((&columns * 124 + 124) / 248)
exe '2resize ' . ((&lines * 20 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 123 + 124) / 248)
exe '3resize ' . ((&lines * 18 + 30) / 61)
exe 'vert 3resize ' . ((&columns * 123 + 124) / 248)
exe '4resize ' . ((&lines * 18 + 30) / 61)
exe 'vert 4resize ' . ((&columns * 123 + 124) / 248)
tabnext
edit test/commands.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 124 + 124) / 248)
exe 'vert 2resize ' . ((&columns * 123 + 124) / 248)
argglobal
balt lib/commands.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 56 - ((55 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 56
normal! 03|
wincmd w
argglobal
if bufexists(fnamemodify("lib/files.js", ":p")) | buffer lib/files.js | else | edit lib/files.js | endif
if &buftype ==# 'terminal'
  silent file lib/files.js
endif
balt lib/commands.js
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 48 - ((42 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 48
normal! 053|
wincmd w
exe 'vert 1resize ' . ((&columns * 124 + 124) / 248)
exe 'vert 2resize ' . ((&columns * 123 + 124) / 248)
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
