import ArrowDownIcon from '../icon-arrow'
import { MCollapseTransition } from '../collapse'

function renderItem (h, ctx, item) {
  if (item.type === 'line') return renderLine(h)

  if (item.type === 'group') {
    return (
      <li class="m-group">
        <div class="m-group--item">
          <span class="m-group--title">{item.label}</span>
        </div>
        <ul class="m-menu">
          {item.items.map(e => renderItem(h, ctx, e))}
        </ul>
      </li>
    )
  }

  if (item.type === 'submenu') {
    return (
      <li class="m-submenu">
        <div class="m-submenu--item" on-click={() => (item.open = !item.open) }>
          {item.icon ? <i class={[ 'm-submenu--icon', item.icon ]}></i> : null}
          <span class="m-submenu--title">{item.label}</span>
          <ArrowDownIcon class="m-submenu--arrow-down-icon" direction={ item.open ? 'top' : 'bottom' }/>
        </div>
        <MCollapseTransition appear={true}>
          <ul class="m-menu" v-show={item.open}>
            {item.items.map(e => renderItem(h, ctx, e))}
          </ul>
        </MCollapseTransition>
      </li>
    )
  }

  return (
    <li class={['m-menu-item', { active: ctx.currentActive === item.key }]} title={item.title}>
      {renderLink(h, ctx, item, (
        [
          <i class={[ 'm-menu-item--icon', item.icon ]}></i>,
          <span class="m-menu-item--title">{item.label}</span>
        ]
      ))}
    </li>
  )
}

function renderLink (h, ctx, item, children) {
  if (item.link) {
    return <a class="m-menu-item--link" href={item.link} target={item.target} title={item.title}>{children}<i class="fa fa-external-link"></i></a>
  }

  if (item.handle) {
    return <a class="m-menu-item--link" href="javascript:void(0)" on-click={() => item.handle()} title={item.title}>{children}</a>
  }

  return (
    <router-link to={item.path} class="m-menu-item--link" title={item.title}>{children}</router-link>
  )
}

function renderLine (h) {
  return <li class="m-menu-line"></li>
}

export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    },
    theme: String
  },

  data () {
    return {
      currentActive: ''
    }
  },

  render (h) {
    const ctx = this

    return (
      <ul class={[ 'm-menu', this.theme && 'm-menu--' + this.theme ]}>
        {this.menus.map(item => {
          return renderItem(h, ctx, item)
        })}
      </ul>
    )
  }
}
