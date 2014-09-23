rum
===
<b>Introduction</b><br />
It is a small plugin that simplies the use of svg as icons. Simply create a svg tag and give name of icon, rest all is taken care of by <i>rum</i>.<br />

<b>Instructions : </b><br />
<ul>
  <li>Include content of <b>'icons.xml'</b> into your index file.</li>
  <li>Import <b>'rum.css'</b> and <b>'rum.jQuery.js</b></li>
  <li>Create a svg tag.</li>
  <li>Set following attributes :</li>
</ul>
<i>&lt;svg class="rum rum-hover-raise-up" data-id='epicons-pencil' &gt;&lt;/svg&gt;</i>

<b>Explanation</b><br />
<ul>
<li>Class <i>rum</i> initiates the plugin. <i>data-id</i> contained name(id) of the icon.</li>
<li>class <i>rum-hover-raise-up</i> defines action on mouse over. There are other actions which are still undocumented.</li>
<li>On changing data-id dynamically, naturally icon also changes.</li>
</ul>
<b>Demo : </b> http://home.iitb.ac.in/~saquib/rum/
