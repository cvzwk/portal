function showContent(url) {
 var iframe = document.getElementById("content-iframe");
     iframe.src = url;
}

function showContent2(url) {
 var iframe = document.getElementById("content2-iframe");
     iframe.src = url;
}

function mol1() {
	showContent('https://embed.molview.org/v1/?mode=balls&smiles=NCO(O)N');
	showContent2('https://c2v2zw4k.github.io/portal/assets/docs/synthesis/molecules/molecules-procedural/desc/CH7N2O2.html');

}

function mol2() {
	showContent('https://embed.molview.org/v1/?mode=balls&smiles=[Pa-2][Se-][Mn][Pt+4][O-3][H+3][Cu][Yb][Cm+4][Tm-3][Os+][Ar+2]');
	showContent2('https://c2v2zw4k.github.io/portal/assets/docs/synthesis/molecules/molecules-procedural/desc/ArCmCuHMnOOsPaPtSeTmYb.html');
}

function mol3() {
	showContent('https://embed.molview.org/v1/?mode=balls&smiles=[O-]O[N+][N-4][O-]O[O+][O-3][N-][N+][C-2][O+2]C[C-3]');
	showContent2('https://c2v2zw4k.github.io/portal/assets/docs/synthesis/molecules/molecules-procedural/desc/C3H8N4O7.html');
}
// Security Cleaner
// Delete all items in localStorage
localStorage.clear();
